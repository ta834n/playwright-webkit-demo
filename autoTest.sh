#!/bin/bash

# runs 100 times the current test config of playwright

for _ in {1..100}
do
  npx playwright test "$1"
done

# after iterating show report
npx playwright show-report
