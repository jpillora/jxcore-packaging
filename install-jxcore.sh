
#IS MAC?
if `node -e 'process.exit(require("os").platform()==="darwin" ? 0 : 1);'`; then
  VERSION=jx_osx64
else
  VERSION=jx_ub64
fi

URL=https://s3.amazonaws.com/nodejx/$VERSION.zip

echo "downloading: $URL"
curl $URL -o /tmp/jx.zip &&
  unzip -o -qq /tmp/jx.zip -d /tmp/jx/ &&
  mv /tmp/jx/$VERSION/jx /usr/local/bin/jx &&
  rm -rf /tmp/jx &&
  echo "installed"