#!/bin/sh

BASE=`pwd`
TMP=$PWD/tmp
DIRS=`ls -d */`

finish() {
  #remove tmp
  rm -r $TMP
  exit
}

example() {
  #clear tmp
  mkdir -p $TMP
  rm -r $TMP/*

  EG=$1
  cd $BASE/$EG

  echo "== Running '$EG' ==="

  jx test.js &> $TMP/unpackaged.txt

  if ! jx compile package.jxp &> $TMP/compile.txt; then
    echo "FAIL: packaging error\n`cat $TMP/compile.txt`"
    return
  fi

  cd $TMP
  jx test.jx &> $TMP/packaged.txt

  echo "== Diff Output =="
  if ! diff -q $TMP/unpackaged.txt $TMP/packaged.txt; then
    echo "FAIL"
    diff $TMP/unpackaged.txt $TMP/packaged.txt
  else
    echo "PASS"
  fi
}

for dir in $DIRS; do
  example $dir
done

finish
