EG=$1
if [ ! -d $EG ]; then
  echo "missing example $EG"
  exit 1
fi

mkdir -p out

cd $EG
echo "== Running '$EG' ==="
jx test.js &> ../out/unpackaged.txt
jx compile package.jxp
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
