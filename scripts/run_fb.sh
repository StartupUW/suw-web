#!/bin/bash

while true
do
        echo "Running Facebook events script..."
        python fb.py
        echo "Completed at $(date)"
        sleep 43200
done
