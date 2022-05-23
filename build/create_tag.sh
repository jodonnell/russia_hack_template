#!/bin/bash

VERSION=""

#get parameters
while getopts v: flag
do
  case "${flag}" in
    v) VERSION=${OPTARG};;
  esac
done

#get highest tag number, and add 1.0.0 if doesn't exist
CURRENT_VERSION=`git describe --abbrev=0 --tags 2>/dev/null`

if [[ $CURRENT_VERSION == '' ]]
then
  CURRENT_VERSION='0'
fi
echo "Current Version: $CURRENT_VERSION"


NEW_VERSION=$((CURRENT_VERSION+1))


#get current hash and see if it already has a tag
GIT_COMMIT=`git rev-parse HEAD`
NEEDS_TAG=`git describe --contains $GIT_COMMIT 2>/dev/null`

if [ -z "$NEEDS_TAG" ]; then
    git tag $NEW_VERSION
    exit 0
else
    echo "Already a tag on this commit"
    exit 1
fi
