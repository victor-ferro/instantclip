import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesModule } from '../../src/templates/templates.module';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module'
import { TemplatesService } from '../../src/templates/templates.service';
import { Template } from '../../src/templates/model/template';
//import { AuthGuard } from '@nestjs/passport';

describe('Templates', () => {
    let app: INestApplication;
    let templates: Template[] = [
       /* {
            "id": "A265",
            "title": "SATURDAY NIGHT In",
            "thumbnailUrl": "https://instantclip.app/app_images/saturdaynight.jpeg",
            "creator": {
                "name": "fulltimefemme",
                "username": "fulltimefemme",
                "avatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg"
            },
            "music": {
                "name": "Saturday night out - fulltimefemme song"
            },
            "authorName": "fulltimefemme",
            "authorAvatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg",
            "sample": "https://instantclip.app/app_images/saturdaynight.mp4",
            "tags": [
                "party"
            ],
            "template": {
                "duration": 4.2,
                "soundUrl": "https://instantclip.app/app_images/saturdaynight.mp3",
                "slots": [
                    {
                        "time": 1.1,
                        "type": "video"
                    },
                    {
                        "time": 0.4,
                        "type": "video"
                    },
                    {
                        "time": 0.4,
                        "type": "video"
                    },
                    {
                        "time": 0.5,
                        "type": "video"
                    },
                    {
                        "time": 0.5,
                        "type": "video"
                    },
                    {
                        "time": 0.5,
                        "type": "video"
                    },
                    {
                        "time": 0.4,
                        "type": "video"
                    },
                    {
                        "time": 0.4,
                        "type": "video"
                    }
                ]
            }
        },*/
        {
              "id": "A22",
              "title": "SATURDAY NIGHT OUT",
              "thumbnailUrl": "https://instantclip.app/app_images/saturdaynight.jpeg",
              "creator": {
                  "name": "fulltimefemme",
                  "username": "fulltimefemme",
                  "avatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg"
              },
              "music": {
                  "name": "Saturday night out - fulltimefemme song"
              },
              "authorName": "fulltimefemme",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg",
              "sample": "https://instantclip.app/app_images/saturdaynight.mp4",
              "tags": ["party"],
              "template": {
                  "duration": 4.2,
                  "soundUrl": "https://instantclip.app/app_images/saturdaynight.mp3",
                  "slots": [{
                      "time": 1.1,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A21",
              "title": "A MI MANERA",
              "thumbnailUrl": "https://instantclip.app/app_images/conri.jpeg",
              "creator": {
                  "name": "emgy.fm",
                  "username": "emgy.fm",
                  "avatarUrl": "https://instantclip.app/app_images/c/conri.jpeg"
              },
              "music": {
                  "name": "Vivo a mi manera - emgy"
              },
              "authorName": "emgy.fm",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/conri.jpeg",
              "sample": "https://instantclip.app/app_images/conri.mov",
              "tags": ["party"],
              "template": {
                  "duration": 10.6,
                  "soundUrl": "https://instantclip.app/app_images/conri.mp3",
                  "slots": [{
                      "time": 1.6,
                      "type": "video"
                  }, {
                      "time": 0.6,
                      "type": "video"
                  }, {
                      "time": 1.0,
                      "type": "video"
                  }, {
                      "time": 0.6,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 1.0,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A20",
              "title": "CITY RUNAWAY",
              "thumbnailUrl": "https://instantclip.app/app_images/runaway.jpeg",
              "creator": {
                  "name": "fulltimefemme",
                  "username": "fulltimefemme",
                  "avatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg"
              },
              "music": {
                  "name": "Runaway"
              },
              "authorName": "fulltimefemme",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg",
              "sample": "https://instantclip.app/app_images/runaway.mp4",
              "tags": [""],
              "template": {
                  "duration": 6,
                  "soundUrl": "https://instantclip.app/app_images/runaway.mp3",
                  "slots": [{
                      "time": 0.1,
                      "type": "video"
                  }, {
                      "time": 0.1,
                      "type": "video"
                  }, {
                      "time": 0.1,
                      "type": "video"
                  }, {
                      "time": 0.1,
                      "type": "video"
                  }, {
                      "time": 0.1,
                      "type": "video"
                  }, {
                      "time": 0.1,
                      "type": "video"
                  }, {
                      "time": 0.1,
                      "type": "video"
                  }, {
                      "time": 0.1,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.2,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A18",
              "title": "Good Moments",
              "thumbnailUrl": "https://instantclip.app/app_images/goodmoments.jpg",
              "creator": {
                  "name": "Sabrina",
                  "username": "sabrina.marina.silva",
                  "avatarUrl": "https://instantclip.app/app_images/c/sabrina.marina.silva.jpg"
              },
              "music": {
                  "name": "Midnight City, M83"
              },
              "authorName": "sabrina.marina.silva",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/sabrina.marina.silva.jpg",
              "sample": "https://instantclip.app/app_images/goodmoments.mp4",
              "tags": ["travel", "lifestyle"],
              "template": {
                  "duration": 7.75,
                  "soundUrl": "https://instantclip.app/app_images/goodmoments.mp3",
                  "slots": [{
                      "time": 0.70,
                      "type": "video"
                  }, {
                      "time": 0.50,
                      "type": "video"
                  }, {
                      "time": 0.55,
                      "type": "video"
                  }, {
                      "time": 1.50,
                      "type": "video"
                  }, {
                      "time": 0.60,
                      "type": "video"
                  }, {
                      "time": 0.90,
                      "type": "video"
                  }, {
                      "time": 1.10,
                      "type": "video"
                  }, {
                      "time": 0.80,
                      "type": "video"
                  }, {
                      "time": 0.60,
                      "type": "video"
                  }, {
                      "time": 0.50,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A19",
              "title": "SUMMER ON MY MIND",
              "thumbnailUrl": "https://instantclip.app/app_images/summermymind.jpeg",
              "creator": {
                  "name": "fulltimefemme",
                  "username": "fulltimefemme",
                  "avatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg"
              },
              "music": {
                  "name": "All Time Low, Jon Bellion"
              },
              "authorName": "fulltimefemme",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg",
              "sample": "https://instantclip.app/app_images/summermymind.mp4",
              "tags": [""],
              "template": {
                  "duration": 8.2,
                  "soundUrl": "https://instantclip.app/app_images/summermymind.mp3",
                  "slots": [{
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A15",
              "title": "Paradise on Earth",
              "thumbnailUrl": "https://instantclip.app/app_images/paradise.jpg",
              "creator": {
                  "name": "Sabrina",
                  "username": "sabrina.marina.silva",
                  "avatarUrl": "https://instantclip.app/app_images/c/sabrina.marina.silva.jpg"
              },
              "music": {
                  "name": "The street collective, original sound"
              },
              "authorName": "sabrina.marina.silva",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/sabrina.marina.silva.jpg",
              "sample": "https://instantclip.app/app_images/paradise.mp4",
              "tags": ["travel", "nature", "landscape"],
              "template": {
                  "duration": 11.5,
                  "soundUrl": "https://instantclip.app/app_images/paradise.mp3",
                  "slots": [{
                      "time": 2.3,
                      "type": "video"
                  }, {
                      "time": 1.2,
                      "type": "video"
                  }, {
                      "time": 2.0,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 1.0,
                      "type": "video"
                  }, {
                      "time": 2.0,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 1.0,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A11",
              "title": "LIFE IN THE CITY",
              "thumbnailUrl": "https://instantclip.app/app_images/lifeinthecity.jpeg",
              "creator": {
                  "name": "fulltimefemme",
                  "username": "fulltimefemme",
                  "avatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "fulltimefemme",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg",
              "sample": "https://instantclip.app/app_images/lifeinthecity.mov",
              "tags": [""],
              "template": {
                  "duration": 6.6,
                  "soundUrl": "https://instantclip.app/app_images/lifeinthecity.mp3",
                  "slots": [{
                      "time": 0.9,
                      "type": "video"
                  }, {
                      "time": 0.6,
                      "type": "video"
                  }, {
                      "time": 0.7,
                      "type": "video"
                  }, {
                      "time": 0.7,
                      "type": "video"
                  }, {
                      "time": 0.6,
                      "type": "video"
                  }, {
                      "time": 0.7,
                      "type": "video"
                  }, {
                      "time": 0.6,
                      "type": "video"
                  }, {
                      "time": 1.1,
                      "type": "video"
                  }, {
                      "time": 0.7,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A16",
              "title": "Symphony",
              "thumbnailUrl": "https://instantclip.app/app_images/symphony.jpg",
              "creator": {
                  "name": "Sabrina",
                  "username": "sabrina.marina.silva",
                  "avatarUrl": "https://instantclip.app/app_images/c/sabrina.marina.silva.jpg"
              },
              "music": {
                  "name": "clean bandit, symphony"
              },
              "authorName": "sabrina.marina.silva",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/sabrina.marina.silva.jpg",
              "sample": "https://instantclip.app/app_images/symphony.mp4",
              "tags": ["travel", "lifestyle"],
              "template": {
                  "duration": 7,
                  "soundUrl": "https://instantclip.app/app_images/symphony.mp3",
                  "slots": [{
                      "time": 0.7,
                      "type": "video"
                  }, {
                      "time": 0.8,
                      "type": "video"
                  }, {
                      "time": 0.7,
                      "type": "video"
                  }, {
                      "time": 1.45,
                      "type": "video"
                  }, {
                      "time": 0.2,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.3,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.25,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 1.8,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A7",
              "title": "Miss you",
              "thumbnailUrl": "https://instantclip.app/app_images/abcd.jpg",
              "creator": {
                  "name": "travelwithvivien",
                  "username": "travelwithvivien",
                  "avatarUrl": "https://instantclip.app/app_images/c/travelwithvivien.jpg"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "travelwithvivien",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/travelwithvivien.jpg",
              "sample": "https://instantclip.app/app_images/abcd.mp4",
              "tags": [""],
              "template": {
                  "duration": 4.8,
                  "soundUrl": "http://instantclip.app/app_images/abcd.mp3",
                  "slots": [{
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.45,
                      "type": "video"
                  }, {
                      "time": 0.53,
                      "type": "video"
                  }, {
                      "time": 0.64,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.47,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 1.99,
                      "type": "video"
                  }, {
                      "time": 2.05,
                      "type": "video"
                  }, {
                      "time": 1.3,
                      "type": "video"
                  }, {
                      "time": 3.46,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A17",
              "title": " Gangsta's Paradise",
              "thumbnailUrl": "https://instantclip.app/app_images/gangsta.jpg",
              "creator": {
                  "name": "Sabrina",
                  "username": "sabrina.marina.silva",
                  "avatarUrl": "https://instantclip.app/app_images/c/sabrina.marina.silva.jpg"
              },
              "music": {
                  "name": "chill fruits music, GANGSTA'S paradise"
              },
              "authorName": "sabrina.marina.silva",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/sabrina.marina.silva.jpg",
              "sample": "https://instantclip.app/app_images/gangsta.mp4",
              "tags": ["travel", "lifestyle", "sports"],
              "template": {
                  "duration": 10.2,
                  "soundUrl": "https://instantclip.app/app_images/gangsta.mp3",
                  "slots": [{
                      "time": 0.7,
                      "type": "video"
                  }, {
                      "time": 0.9,
                      "type": "video"
                  }, {
                      "time": 0.7,
                      "type": "video"
                  }, {
                      "time": 0.8,
                      "type": "video"
                  }, {
                      "time": 0.9,
                      "type": "video"
                  }, {
                      "time": 0.8,
                      "type": "video"
                  }, {
                      "time": 0.7,
                      "type": "video"
                  }, {
                      "time": 1.0,
                      "type": "video"
                  }, {
                      "time": 0.7,
                      "type": "video"
                  }, {
                      "time": 0.7,
                      "type": "video"
                  }, {
                      "time": 1.0,
                      "type": "video"
                  }, {
                      "time": 0.7,
                      "type": "video"
                  }, {
                      "time": 0.6,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A1",
              "title": "Piano trips",
              "thumbnailUrl": "https://instantclip.app/app_images/a1.jpg",
              "creator": {
                  "name": "tonilopezmr",
                  "username": "tonilopezmr",
                  "avatarUrl": "https://avatars.githubusercontent.com/u/5845622?s=40&v=4"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "fulltimefemme",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg",
              "sample": "https://instantclip.app/app_images/video_sample2.MOV",
              "tags": ["piano"],
              "template": {
                  "duration": 8,
                  "soundUrl": "https://instantclip.app/app_images/video_sample2.mp3",
                  "slots": [{
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.4,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "video"
                  }, {
                      "time": 0.6,
                      "type": "video"
                  }, {
                      "time": 2.4,
                      "type": "video"
                  }]
              }
          },
          {
              "id": "A2",
              "title": "Good part",
              "thumbnailUrl": "https://instantclip.app/app_images/a3.jpg",
              "creator": {
                  "name": "tonilopezmr",
                  "username": "tonilopezmr",
                  "avatarUrl": "https://avatars.githubusercontent.com/u/5845622?s=40&v=4"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "fulltimefemme",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg",
              "sample": "https://instantclip.app/app_images/good_part_sample.mov",
              "tags": [""],
              "template": {
                  "duration": 7,
                  "soundUrl": "https://instantclip.app/app_images/good_part.mp3",
                  "slots": [{
                      "time": 3.4,
                      "type": "video"
                  }, {
                      "time": 3.6,
                      "type": "video"
                  }]
              }
          },
          {
              "id": "A3",
              "title": "Unexpected Journey",
              "thumbnailUrl": "https://instantclip.app/app_images/a4.jpg",
              "creator": {
                  "name": "tonilopezmr",
                  "username": "tonilopezmr",
                  "avatarUrl": "https://avatars.githubusercontent.com/u/5845622?s=40&v=4"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "fulltimefemme",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg",
              "sample": "https://instantclip.app/app_images/unexpected_travel.mov",
              "tags": [""],
              "template": {
                  "duration": 8.37,
                  "soundUrl": "http://instantclip.app/app_images/unexpected_travel.mp3",
                  "slots": [{
                      "time": 2.70,
                      "type": "video"
                  }, {
                      "time": 0.6,
                      "type": "video"
                  }, {
                      "time": 0.57,
                      "type": "video"
                  }, {
                      "time": 0.62,
                      "type": "video"
                  }, {
                      "time": 0.47,
                      "type": "video"
                  }, {
                      "time": 0.37,
                      "type": "video"
                  }, {
                      "time": 0.34,
                      "type": "video"
                  }, {
                      "time": 0.47,
                      "type": "video"
                  }, {
                      "time": 0.36,
                      "type": "video"
                  }, {
                      "time": 0.33,
                      "type": "video"
                  }, {
                      "time": 0.50,
                      "type": "video"
                  }, {
                      "time": 0.44,
                      "type": "video"
                  }, {
                      "time": 0.26,
                      "type": "video"
                  }, {
                      "time": 0.34,
                      "type": "video"
                  }]
              }
          },
          {
              "id": "A4",
              "title": "Let's go",
              "thumbnailUrl": "https://instantclip.app/app_images/a7.jpeg",
              "creator": {
                  "name": "tonilopezmr",
                  "username": "tonilopezmr",
                  "avatarUrl": "https://avatars.githubusercontent.com/u/5845622?s=40&v=4"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "fulltimefemme",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg",
              "sample": "https://instantclip.app/app_images/letsgo.mp4",
              "tags": [""],
              "template": {
                  "duration": 11,
                  "soundUrl": "http://instantclip.app/app_images/letsgo.mp3",
                  "slots": [{
                      "time": 3.74,
                      "type": "video"
                  }, {
                      "time": 1.28,
                      "type": "video"
                  }, {
                      "time": 1.18,
                      "type": "video"
                  }, {
                      "time": 1.14,
                      "type": "video"
                  }, {
                      "time": 1.26,
                      "type": "video"
                  }, {
                      "time": 0.91,
                      "type": "video"
                  }, {
                      "time": 1.05,
                      "type": "video"
                  }]
              }
          },
          {
              "id": "A6",
              "title": "So Alone",
              "thumbnailUrl": "https://instantclip.app/app_images/soalone.jpeg",
              "creator": {
                  "name": "travelwithvivien",
                  "username": "travelwithvivien",
                  "avatarUrl": "https://instantclip.app/app_images/c/travelwithvivien.jpg"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "travelwithvivien",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/travelwithvivien.jpg",
              "sample": "https://instantclip.app/app_images/soalone.mp4",
              "tags": [""],
              "template": {
                  "duration": 4.8,
                  "soundUrl": "http://instantclip.app/app_images/soalone.mp3",
                  "slots": [{
                      "time": 1,
                      "type": "video"
                  }, {
                      "time": 0.5,
                      "type": "image"
                  }, {
                      "time": 0.5,
                      "type": "image"
                  }, {
                      "time": 0.5,
                      "type": "image"
                  }, {
                      "time": 0.5,
                      "type": "image"
                  }, {
                      "time": 0.5,
                      "type": "image"
                  }, {
                      "time": 0.5,
                      "type": "image"
                  }, {
                      "time": 0.5,
                      "type": "image"
                  }, {
                      "time": 0.5,
                      "type": "image"
                  }, {
                      "time": 0.5,
                      "type": "image"
                  }, {
                      "time": 0.5,
                      "type": "image"
                  }, {
                      "time": 0.5,
                      "type": "image"
                  }]
              }
          }, {
              "id": "A8",
              "title": "Sunset",
              "thumbnailUrl": "https://instantclip.app/app_images/sunset.jpg",
              "creator": {
                  "name": "roadsandrivers.de",
                  "username": "roadsandrivers.de",
                  "avatarUrl": "https://instantclip.app/app_images/c/roadsandrivers.jpg"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "roadsandrivers.de",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/roadsandrivers.jpg",
              "sample": "https://instantclip.app/app_images/sunset.mp4",
              "tags": [""],
              "template": {
                  "duration": 6.62,
                  "soundUrl": "http://instantclip.app/app_images/sunset.mp3",
                  "slots": [{
                      "time": 1.34,
                      "type": "video"
                  }, {
                      "time": 0.47,
                      "type": "video"
                  }, {
                      "time": 1.43,
                      "type": "video"
                  }, {
                      "time": 0.49,
                      "type": "video"
                  }, {
                      "time": 1.37,
                      "type": "video"
                  }, {
                      "time": 0.45,
                      "type": "video"
                  }, {
                      "time": 1.07,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A9",
              "title": "Live your Life",
              "thumbnailUrl": "https://instantclip.app/app_images/yourlife.jpg",
              "creator": {
                  "name": "tonilopezmr",
                  "username": "tonilopezmr",
                  "avatarUrl": "https://avatars.githubusercontent.com/u/5845622?s=40&v=4"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "fulltimefemme",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg",
              "sample": "https://instantclip.app/app_images/yourlife.mp4",
              "tags": [""],
              "template": {
                  "duration": 12,
                  "soundUrl": "http://instantclip.app/app_images/yourlife.mp3",
                  "slots": [{
                      "time": 1.63,
                      "type": "video"
                  }, {
                      "time": 0.52,
                      "type": "video"
                  }, {
                      "time": 0.46,
                      "type": "video"
                  }, {
                      "time": 0.31,
                      "type": "video"
                  }, {
                      "time": 0.6,
                      "type": "video"
                  }, {
                      "time": 0.8,
                      "type": "video"
                  }, {
                      "time": 1.23,
                      "type": "video"
                  }, {
                      "time": 0.46,
                      "type": "video"
                  }, {
                      "time": 1.43,
                      "type": "video"
                  }, {
                      "time": 0.97,
                      "type": "video"
                  }, {
                      "time": 0.83,
                      "type": "video"
                  }, {
                      "time": 0.70,
                      "type": "video"
                  }, {
                      "time": 0.65,
                      "type": "video"
                  }, {
                      "time": 0.89,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A10",
              "title": "Steps",
              "thumbnailUrl": "https://instantclip.app/app_images/steps.jpg",
              "creator": {
                  "name": "tonilopezmr",
                  "username": "tonilopezmr",
                  "avatarUrl": "https://avatars.githubusercontent.com/u/5845622?s=40&v=4"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "fulltimefemme",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/fulltimefemme.jpg",
              "sample": "https://instantclip.app/app_images/steps.mp4",
              "tags": [""],
              "template": {
                  "duration": 9,
                  "soundUrl": "http://instantclip.app/app_images/steps.mp3",
                  "slots": [{
                      "time": 0.95,
                      "type": "video"
                  }, {
                      "time": 0.68,
                      "type": "video"
                  }, {
                      "time": 0.68,
                      "type": "video"
                  }, {
                      "time": 0.68,
                      "type": "video"
                  }, {
                      "time": 0.68,
                      "type": "video"
                  }, {
                      "time": 0.68,
                      "type": "video"
                  }, {
                      "time": 0.68,
                      "type": "video"
                  }, {
                      "time": 0.68,
                      "type": "video"
                  }, {
                      "time": 0.68,
                      "type": "video"
                  }, {
                      "time": 0.68,
                      "type": "video"
                  }, {
                      "time": 0.68,
                      "type": "video"
                  }, {
                      "time": 0.68,
                      "type": "video"
                  }, {
                      "time": 0.68,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A12",
              "title": "My Valentine",
              "thumbnailUrl": "https://instantclip.app/app_images/myvalentine.jpg",
              "creator": {
                  "name": "its_jal",
                  "username": "its_jal",
                  "avatarUrl": "https://instantclip.app/app_images/c/its_jal.jpg"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "its_jal",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/its_jal.jpg",
              "sample": "https://instantclip.app/app_images/myvalentine.mp4",
              "tags": ["valentine"],
              "template": {
                  "duration": 14.4,
                  "soundUrl": "http://instantclip.app/app_images/myvalentine.mp3",
                  "slots": [{
                      "time": 2.1,
                      "type": "video"
                  }, {
                      "time": 1.2,
                      "type": "video"
                  }, {
                      "time": 1.2,
                      "type": "video"
                  }, {
                      "time": 1.7,
                      "type": "video"
                  }, {
                      "time": 1.6,
                      "type": "video"
                  }, {
                      "time": 1.6,
                      "type": "video"
                  }, {
                      "time": 1.6,
                      "type": "video"
                  }, {
                      "time": 1.7,
                      "type": "video"
                  }, {
                      "time": 1.7,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A13",
              "title": "Application",
              "thumbnailUrl": "https://instantclip.app/app_images/application.jpg",
              "creator": {
                  "name": "sigit.ar13",
                  "username": "sigit.ar13",
                  "avatarUrl": "https://instantclip.app/app_images/c/sigit.ar13.jpg"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "sigit.ar13",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/sigit.ar13.jpg",
              "sample": "https://instantclip.app/app_images/application.mp4",
              "tags": ["application"],
              "template": {
                  "duration": 12.48,
                  "soundUrl": "http://instantclip.app/app_images/application.mp3",
                  "slots": [{
                      "time": 4.53,
                      "type": "video"
                  }, {
                      "time": 1.60,
                      "type": "video"
                  }, {
                      "time": 0.83,
                      "type": "video"
                  }, {
                      "time": 0.85,
                      "type": "video"
                  }, {
                      "time": 0.41,
                      "type": "video"
                  }, {
                      "time": 0.44,
                      "type": "video"
                  }, {
                      "time": 0.87,
                      "type": "video"
                  }, {
                      "time": 0.86,
                      "type": "video"
                  }, {
                      "time": 0.85,
                      "type": "video"
                  }, {
                      "time": 0.41,
                      "type": "video"
                  }, {
                      "time": 0.41,
                      "type": "video"
                  }, {
                      "time": 0.42,
                      "type": "video"
                  }]
              }
          }, {
              "id": "A14",
              "title": "Things of Beauty",
              "thumbnailUrl": "https://instantclip.app/app_images/beauty.jpg",
              "creator": {
                  "name": "its_jal",
                  "username": "its_jal",
                  "avatarUrl": "https://instantclip.app/app_images/c/its_jal.jpg"
              },
              "music": {
                  "name": "Things of Beauty"
              },
              "authorName": "its_jal",
              "authorAvatarUrl": "https://instantclip.app/app_images/c/its_jal.jpg",
              "sample": "https://instantclip.app/app_images/beauty.mp4",
              "tags": ["beauty"],
              "template": {
                  "duration": 9.95,
                  "soundUrl": "http://instantclip.app/app_images/beauty.mp3",
                  "slots": [{
                      "time": 1.09,
                      "type": "video"
                  }, {
                      "time": 2.78,
                      "type": "video"
                  }, {
                      "time": 0.58,
                      "type": "video"
                  }, {
                      "time": 0.37,
                      "type": "video"
                  }, {
                      "time": 0.88,
                      "type": "video"
                  }, {
                      "time": 0.56,
                      "type": "video"
                  }, {
                      "time": 0.42,
                      "type": "video"
                  }, {
                      "time": 0.53,
                      "type": "video"
                  }, {
                      "time": 0.48,
                      "type": "video"
                  }, {
                      "time": 0.48,
                      "type": "video"
                  }, {
                      "time": 0.45,
                      "type": "video"
                  }, {
                      "time": 0.75,
                      "type": "video"
                  }, {
                      "time": 0.58,
                      "type": "video"
                  }]
              }
          }
      
      ]
    let templatesService = { 
        findAll: () => templates,
        findOne: (id: string) => templates.find(item => item.id == id),
        update: (id: string, template: Template) => {
            templates.forEach(function(item, i){
                if (item.id == id){
                  this[i] = template
                }
              }, templates);
              return templates;
        },
        create: (template: Template) => {
            templates.push(template)
            return templates
        },
        remove: (id: string) => {
            templates.forEach(function(item, i){
                if (item.id == id){
                  this.splice(i, 1)
                }
              }, templates);
            
              return templates;
        }
    };
  
    beforeAll(async () => {
      const moduleRef: TestingModule = await Test.createTestingModule({
        imports: [TemplatesModule],
      })
        //.overrideGuard(AuthGuard('jwt'))
        //.useValue('')
        //.overrideProvider(TemplatesService)
        //.useValue(templatesService)
        .compile();
  
      app = moduleRef.createNestApplication();
      await app.init();  
    });

    it('/templates (GET)', () => {
      return request(app.getHttpServer())
        .get('/templates')
        .expect(200)
        .expect(templatesService.findAll());
    });
    it('/templates/:id (GET)', () => {
        return request(app.getHttpServer())
          .get('/templates/A22')
          .expect(200)
          .expect(templatesService.findOne('A22'));
      });
    it('/templates (POST)', () => {
        return request(app.getHttpServer())
          .post('/templates')
          .expect(201)
          //.expect(templatesService.create(templates[1]))
      });
      it('/templates/:id (PATCH)', () => {
        return request(app.getHttpServer())
          .patch('/templates/A22')
          .expect(200)
          //.expect(templatesService.update('A22', templates[1]))
      });
      it('/templates/:id (DELETE)', () => {
        return request(app.getHttpServer())
          .delete('/templates/A22')
          .expect(200)
          //.expect(templatesService.remove('A22'))
      });

    afterAll(async () => {
      await app.close();
    });
  });