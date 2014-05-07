#!/bin/sh

FILTER=$1
BASE=`pwd`
TMP=$PWD/tmp
DIRS=`ls -d */`

finish() {
  #remove tmp
  rm -r $TMP &> /dev/null
  exit
}

example() {
  #clear tmp
  mkdir -p $TMP
  rm -r $TMP/* &> /dev/null

  EG=$1
  cd $BASE/$EG

  #npm install if this example has a package.json
  if [ -e $BASE/$EG/package.json ] && ! [ -e $BASE/$EG/node_modules ]; then
    echo "== npm install '$EG' ==="
    npm install
  fi

  #run example with jx
  echo "== Running '$EG' ==="
  jx test.js &> $TMP/unpackaged.txt

  #compile example 
  jx compile package.jxp &> $TMP/compile.txt

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

for dir in $DIRS; do
  #filter tests that match $1
  if [[ $dir == *$FILTER* ]]; then
    example $dir
  fi
done

finish
