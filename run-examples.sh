#!/bin/sh

FILTER=$1
BASE=`pwd`
TMP=$BASE/tmp
DIRS=`ls -d */`

finish() {
  #remove tmp
  rm -r $TMP &> /dev/null
  exit
}

runtest() {
  #clear tmp
  mkdir -p $TMP
  rm -rf $TMP/* &> /dev/null

  TEST=$1
  cd $BASE/$TEST

  #npm install if this example has a package.json
  if [ -e $BASE/$TEST/package.json ] && ! [ -e $BASE/$TEST/node_modules ]; then
    echo "== npm install '$TEST' ==="
    npm install
  fi

  # native modules: only works if we also copy node_modules
  # if [ -e $BASE/$TEST/node_modules ]; then
  #   cp -r $BASE/$TEST/node_modules $TMP/node_modules
  # fi

  #run example with jx
  echo "== Running '$TEST' ==="
  jx test.js &> $TMP/unpackaged.txt

  #compile example using .jxp
  if [ -e package.jxp ]; then
    jx compile package.jxp &> $TMP/compile.txt
  else #compile example using auto-package
    jx package test.js $TMP/test &> $TMP/compile.txt
  fi

  if ! [ -e $TMP/test.jx ]; then
    echo "FAIL: packaging error:\n`cat $TMP/compile.txt`"
    return
  fi

  #run compiled example
  cd $TMP
  jx test.jx &> $TMP/packaged.txt

  #compare both
  if ! diff -q $TMP/unpackaged.txt $TMP/packaged.txt &> /dev/null; then
    echo "FAIL"
    diff $TMP/unpackaged.txt $TMP/packaged.txt
  else
    echo "PASS"
  fi
}

for DIR in $DIRS; do
  #filter tests that match $1
  if [[ $DIR == *$FILTER* ]]; then
    runtest $DIR
  fi
done

finish
