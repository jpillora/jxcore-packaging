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

fs.js:485
  return binding.open(pathModule._makeLong(path), stringToFlags(flags), mode);
                 ^
Error: ENOENT, no such file or directory './bar.txt'
    at Object.fs.openSync (fs.js:485:18)
    at Object.fs.readFileSync (fs.js:342:15)
    at Object.<anonymous> (./test.js:7:19)
    at Module._compile (module.js:514:26)
    at readX (module.js:967:4)
    at Object.Module._extensions..jx (module.js:1199:638)
    at Module.load (module.js:379:33)
    at Function.Module._load (module.js:331:12)
    at Function.Module.runMain (module.js:579:11)
    at startup (node.js:257:14)
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
