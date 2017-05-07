#! /bin/bash

docker events -f "label=lb.hook" | while read line; do docker exec killaassistant_lb_1 /reload.sh; done