### video-player-and-carousel

## Related Projects
  https://github.com/team-fry-hrr37-fec/video-player-and-carousel

## Requirements
  PostgreSQL should be installed and running on your machine
  Node 6.13.0
  etc
  
## Development
# Installing Dependencies
  From within the root directory:
    npm install -g webpack
    npm install

## CRUD API Routes

| intention                                                       | request type | request url       | request body                                                          | side effect                                                     | response body                                                                                                                           |
|-----------------------------------------------------------------|--------------|-------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| read movie name and associated videos                           | GET          | /videos/:id | none                                                                  | none                                                            | [{id:1, name:'2001: A Space Odyssey',associatedVideos:[{title: '...',url: '...'},{title: '...',url: '...'},{title: '...',url: '...'}]}] |
| add movie name and associated videos to database                | POST         | /videos/:id | {name: 'Shrek', associatedVideos:[{title: '...', url: '...'}, ...]}   | add movie and associated videos to database                     | {name: Shrek, associatedVideos:[{title: '...', url: '...'}, ...]}                                                                       |
| edit specified movie name and associated videos in database     | PUT          | /videos/:id | {name: 'Shrek', associatedVideos:[{title: '...', url: '...'}, ...]}   | update specified movie or associated videos in database         | {name: 'Shrek 2', associatedVideos:[{title: '...', url: '...'}, ...]}                                                                   |
| remove specified movie name and associated videos from database | DELETE       | /videos/:id | {name: 'Shrek 2', associatedVideos:[{title: '...', url: '...'}, ...]} | delete specified movie name and associated videos from database | {name: 'Shrek 2', associatedVideos:[{title: '...', url: '...'}, ...]}                                                                   |
