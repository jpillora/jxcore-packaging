#!/bin/bash
if jx compile child.jxp; then
  exit 0
else
  exit 1
fi
