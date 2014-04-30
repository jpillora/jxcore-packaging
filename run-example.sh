EG=$1
if [ ! -d $EG ]; then
  echo "missing example $EG"
  exit 1
fi

mkdir -p out

cd $EG
jx test.js &> ../out/unpackaged.txt
jx package test.js ../out/test
echo "== Running '$EG' ==="
cd ../out
jx test.jx &> packaged.txt

echo "== Diff Output =="
if ! diff -q unpackaged.txt packaged.txt; then
  echo "FAIL"
  diff unpackaged.txt packaged.txt
else
  echo "PASS"
fi

cd ..
rm -r out/
