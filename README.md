# Killa Search Api

Install
-------

**Create all docker container and the network for the project**
~~~~
make install
~~~~


Uninstall
---------

**Remove all docker containers and network**
~~~~
make uninstall
~~~~

Help commands
-------------

**Show the list of commands**
~~~~
make
~~~~

EndPoints
---------

**Killa voice responses**
~~~
Method: GET
http://host:8080/api/v1/killa/responses
~~~

**Definitions engine**
~~~~
Method: GET
http://host:8080/api/v1/killa/definitions/{search_value}
~~~~

**Web Search engine**

web search
~~~~
Method: GET
http://host:8080/api/v1/killa/webs/{search_value}
OR
http://host:8080/api/v1/killa/webs/{search_value}/{start_index}
~~~~

**Killa place types**

places types
~~~~
Method: GET
http://host:8080/api/v1/killa/places/types
~~~~~