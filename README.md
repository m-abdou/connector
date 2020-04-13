# Connector

    Simple chat application
    
## Installation   

    Note : make sure you have npm and docker on your machine
    
    clone this application from git@github.com:m-abdou/connector.git
    
    cd to connector directory 
    
    we have two phases of installation
    
     - setup environment by using docker
        * run : npm run docker  
    
     now we need start our server  
      - run : npm run server
      
     you can access this server by using this url 
      - http://localhost:2020/
    
     ## Documentation 
      * we provide end point
     
         - Post /api/update    to get all messages related to room 
            * input : { "room"; "123" }
            * output : [{
                            room: '123',
                            sender: 'mohamed',
                            sender_id: 3,
                            message: 'hello',
                            createdAt: '2020-01-01 10:10'
                         }
                       ]
                   
## Brif 

 This application based on
 *  node js 
 *  mongo db 
 *  express 
 *  socket io
 *  docker
