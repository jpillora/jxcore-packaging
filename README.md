See `run-example.sh` files and output below:

``` shell
== EXAMPLE: readfile/
== RUN NON-PACKAGED
/root/Luma/jxcore-packaging/readfile/bar.txt: this is a bar text file
== PACKAGE
Processing the folder..
JXP project file (../out/test.jxp) is ready.

preparing the JX file..
compiling ../out/test 1.0
adding script test.js
adding asset bar.txt
compiled file is ready (../out/test.jx)
== RUN PACKAGED
/root/Luma/jxcore-packaging/out/bar.txt: Error: ENOENT, open 'bar.txt'
== DONE
```

Since "adding asset bar.txt" shouldn't we be able to see "bar.txt"?

``` shell
== EXAMPLE: readdir/
== RUN NON-PACKAGED
/root/Luma/jxcore-packaging/readdir: ping.txt,pong.txt,test.js
== PACKAGE
Processing the folder..
JXP project file (../out/test.jxp) is ready.

preparing the JX file..
compiling ../out/test 1.0
adding script test.js
adding asset ping.txt
adding asset pong.txt
compiled file is ready (../out/test.jx)
== RUN PACKAGED
/root/Luma/jxcore-packaging/out: test.jx,test.jxp
== DONE
```

Similarly, shouldn't we be able to see "ping.txt" and "pong.txt"?
