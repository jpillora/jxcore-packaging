EG=$1
if [ ! -d $EG ]; then
  echo "missing example $EG"
  exit 1
fi
echo "== EXAMPLE: $EG"
cd $EG
echo "== RUN NON-PACKAGED"
jx test.js
echo "== PACKAGE"
jx package test.js ../out/test
echo "== RUN PACKAGED"
cd ../out
jx test.jx
echo "== DONE"
rm *.jx*