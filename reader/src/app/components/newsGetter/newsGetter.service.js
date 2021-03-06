(function() {
  'use strict';

  angular
      .module('reader')
      .service('newsGetter', function(){

        var data =
        {
          "responseData": {
            "results": [
              {
                "GsearchResultClass": "GnewsSearch",
                "clusterUrl": "http://news.google.com/news/story?ncl=dBtpZHBk-LltooM87GWx43_9k4exM&hl=en&ned=us",
                "content": "(CNN) <b>Obama&#39;s</b> visit to his father&#39;s homeland might be a short one, but Kenyan entrepreneurs are hoping that it will have long lasting benefits on the country&#39;s economic development. Preparations have been in full swing for weeks, with Nairobi abuzz <b>...</b>",
                "unescapedUrl": "http://www.cnn.com/2015/07/23/africa/kenya-visit-barack-obama/",
                "url": "http%3A%2F%2Fwww.cnn.com%2F2015%2F07%2F23%2Fafrica%2Fkenya-visit-barack-obama%2F",
                "title": "<b>Barack Obama</b> visit: It&#39;s Kenya&#39;s time to shine - CNN.com",
                "titleNoFormatting": "Barack Obama visit: It&#39;s Kenya&#39;s time to shine - CNN.com",
                "location": "",
                "publisher": "CNN",
                "publishedDate": "Thu, 23 Jul 2015 04:03:45 -0700",
                "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://www.cnn.com/2015/07/23/africa/kenya-visit-barack-obama/&cid=52778905004468&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNGLjAcI6E4W0lSLiHL1NCGh8I2Dqw",
                "language": "en",
                "image": {
                  "url": "http://i2.cdn.turner.com/cnnnext/dam/assets/150721174605-gettyimages-480398168-super-169.jpg",
                  "tbUrl": "http://t3.gstatic.com/images?q=tbn:ANd9GcQGtfsxmEGXaKJyPhjRKZpRh5nP4NwUaajv1_cz0xU1JVK8YkAqXbF0IQ",
                  "originalContextUrl": "http://www.cnn.com/2015/07/23/africa/kenya-visit-barack-obama/",
                  "publisher": "CNN",
                  "tbWidth": 80,
                  "tbHeight": 45
                },
                "relatedStories": [
                  {
                    "unescapedUrl": "http://www.nationaljournal.com/white-house/barack-obama-return-kenya-20150723",
                    "url": "http%3A%2F%2Fwww.nationaljournal.com%2Fwhite-house%2Fbarack-obama-return-kenya-20150723",
                    "title": "A Very Different <b>Barack Obama</b> Returns to Kenya - NationalJournal.com",
                    "titleNoFormatting": "A Very Different Barack Obama Returns to Kenya - NationalJournal.com",
                    "location": "",
                    "publisher": "National Journal",
                    "publishedDate": "Thu, 23 Jul 2015 07:03:45 -0700",
                    "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://www.nationaljournal.com/white-house/barack-obama-return-kenya-20150723&cid=52778905004468&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNHzP2aL6rc-pXwQxVE9c-F0T3tWXQ",
                    "language": "en"
                  },
                  {
                    "unescapedUrl": "http://www.chicagotribune.com/news/nationworld/ct-obama-kenya-20150723-story.html",
                    "url": "http%3A%2F%2Fwww.chicagotribune.com%2Fnews%2Fnationworld%2Fct-obama-kenya-20150723-story.html",
                    "title": "<b>Barack Obama</b> returns to Kenya as president - Chicago Tribune",
                    "titleNoFormatting": "Barack Obama returns to Kenya as president - Chicago Tribune",
                    "location": "",
                    "publisher": "Chicago Tribune",
                    "publishedDate": "Wed, 22 Jul 2015 12:18:45 -0700",
                    "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://www.chicagotribune.com/news/nationworld/ct-obama-kenya-20150723-story.html&cid=52778905004468&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNE9k0jHHW9_8gI5UB3VtLNTGCDIcw",
                    "language": "en"
                  },
                  {
                    "unescapedUrl": "http://www.bbc.com/news/world-africa-33629305",
                    "url": "http%3A%2F%2Fwww.bbc.com%2Fnews%2Fworld-africa-33629305",
                    "title": "Kenya to close airspace for <b>Barack Obama&#39;s</b> visit - BBC News - BBC.com",
                    "titleNoFormatting": "Kenya to close airspace for Barack Obama&#39;s visit - BBC News - BBC.com",
                    "location": "",
                    "publisher": "BBC News",
                    "publishedDate": "Wed, 22 Jul 2015 10:15:00 -0700",
                    "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://www.bbc.com/news/world-africa-33629305&cid=52778905004468&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNHOUM4unNe2Ipeh7ulL0f2tf2lv7A",
                    "language": "en"
                  },
                  {
                    "unescapedUrl": "http://www.denverpost.com/nationworld/ci_28524890/visit-kenya",
                    "url": "http%3A%2F%2Fwww.denverpost.com%2Fnationworld%2Fci_28524890%2Fvisit-kenya",
                    "title": "President <b>Barack Obama</b> to be welcomed with local fanfare in Kenya - The Denver <b>...</b>",
                    "titleNoFormatting": "President Barack Obama to be welcomed with local fanfare in Kenya - The Denver ...",
                    "location": "",
                    "publisher": "The Denver Post",
                    "publishedDate": "Wed, 22 Jul 2015 23:00:00 -0700",
                    "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://www.denverpost.com/nationworld/ci_28524890/visit-kenya&cid=52778905004468&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNE5jnR_pCJd47_MIO2hdUSo8y2nZQ",
                    "language": "en"
                  },
                  {
                    "unescapedUrl": "http://www.nytimes.com/2015/07/23/world/africa/africa-trip-takes-obama-back-to-a-complex-part-of-himself.html",
                    "url": "http%3A%2F%2Fwww.nytimes.com%2F2015%2F07%2F23%2Fworld%2Fafrica%2Fafrica-trip-takes-obama-back-to-a-complex-part-of-himself.html",
                    "title": "Kenya Trip Takes <b>Obama</b> Back to a Complex Part of Himself - The New York Times",
                    "titleNoFormatting": "Kenya Trip Takes Obama Back to a Complex Part of Himself - The New York Times",
                    "location": "",
                    "publisher": "New York Times",
                    "publishedDate": "Wed, 22 Jul 2015 18:10:28 -0700",
                    "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://www.nytimes.com/2015/07/23/world/africa/africa-trip-takes-obama-back-to-a-complex-part-of-himself.html&cid=52778905004468&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNGLSn4hFATS9775QUTcm96GOFehdw",
                    "language": "en"
                  }
                ]
              },
              {
                "GsearchResultClass": "GnewsSearch",
                "clusterUrl": "http://news.google.com/news/story?ncl=dByOafjzTfc_cQMv6upCS2EqbWSkM&hl=en&ned=us",
                "content": "US President <b>Barack Obama</b> sat down with funnyman Jon Stewart of the Daily Show Tuesday evening, where the political satirist and the leader of the free world discussed the recent nuclear agreement between Iran and world powers in the last on-air&nbsp;...",
                "unescapedUrl": "http://www.jpost.com/Middle-East/Iran/Watch-Jon-Stewart-and-Barack-Obama-trade-barbs-over-nuclear-deal-409807",
                "url": "http%3A%2F%2Fwww.jpost.com%2FMiddle-East%2FIran%2FWatch-Jon-Stewart-and-Barack-Obama-trade-barbs-over-nuclear-deal-409807",
                "title": "Watch: Jon Stewart and <b>Barack Obama</b> trade barbs over nuclear deal - Middle <b>...</b>",
                "titleNoFormatting": "Watch: Jon Stewart and Barack Obama trade barbs over nuclear deal - Middle ...",
                "location": "",
                "publisher": "Jerusalem Post Israel News",
                "publishedDate": "Wed, 22 Jul 2015 05:01:54 -0700",
                "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://www.jpost.com/Middle-East/Iran/Watch-Jon-Stewart-and-Barack-Obama-trade-barbs-over-nuclear-deal-409807&cid=52778904594715&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNGCkmzaSwm-BYpb6ycULN1YR3VGNw",
                "language": "en",
                "image": {
                  "url": "http://www.jpost.com/HttpHandlers/ShowImage.ashx?id=293652&h=530&w=758",
                  "tbUrl": "http://t1.gstatic.com/images?q=tbn:ANd9GcS-vbHgWTBmbB2j2fT5KOBOZJGHfwHlMk6ektqDS39uTCQT3NzJAj4HXf8",
                  "originalContextUrl": "http://www.jpost.com/Middle-East/Iran/Watch-Jon-Stewart-and-Barack-Obama-trade-barbs-over-nuclear-deal-409807",
                  "publisher": "Jerusalem Post Israel News",
                  "tbWidth": 80,
                  "tbHeight": 55
                },
                "relatedStories": [
                  {
                    "unescapedUrl": "http://time.com/3967149/jon-stewart-barack-obama-bush/",
                    "url": "http%3A%2F%2Ftime.com%2F3967149%2Fjon-stewart-barack-obama-bush%2F",
                    "title": "How George W. Bush Made Both <b>Barack Obama</b> and Jon Stewart Possible | TIME",
                    "titleNoFormatting": "How George W. Bush Made Both Barack Obama and Jon Stewart Possible | TIME",
                    "location": "",
                    "publisher": "TIME",
                    "publishedDate": "Tue, 21 Jul 2015 22:26:15 -0700",
                    "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://time.com/3967149/jon-stewart-barack-obama-bush/&cid=52778904594715&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNHd0Iukjtv4ihEQen9Zn5AKMdNBgQ",
                    "language": "en"
                  },
                  {
                    "unescapedUrl": "http://www.rollingstone.com/tv/news/watch-jon-stewarts-final-barack-obama-daily-show-interview-20150722",
                    "url": "http%3A%2F%2Fwww.rollingstone.com%2Ftv%2Fnews%2Fwatch-jon-stewarts-final-barack-obama-daily-show-interview-20150722",
                    "title": "Watch Jon Stewart&#39;s Final <b>Barack Obama</b> &#39;Daily Show&#39; Interview | Rolling Stone",
                    "titleNoFormatting": "Watch Jon Stewart&#39;s Final Barack Obama &#39;Daily Show&#39; Interview | Rolling Stone",
                    "location": "",
                    "publisher": "RollingStone.com",
                    "publishedDate": "Wed, 22 Jul 2015 06:18:45 -0700",
                    "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://www.rollingstone.com/tv/news/watch-jon-stewarts-final-barack-obama-daily-show-interview-20150722&cid=52778904594715&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNFKBRPGvIjLGJoA8VyP06Een7gBAw",
                    "language": "en"
                  },
                  {
                    "unescapedUrl": "http://www.latimes.com/entertainment/tv/showtracker/la-et-st-obama-daily-show-20150721-htmlstory.html",
                    "url": "http%3A%2F%2Fwww.latimes.com%2Fentertainment%2Ftv%2Fshowtracker%2Fla-et-st-obama-daily-show-20150721-htmlstory.html",
                    "title": "When <b>Barack Obama</b> met Jon Stewart: A love story - LA Times",
                    "titleNoFormatting": "When Barack Obama met Jon Stewart: A love story - LA Times",
                    "location": "",
                    "publisher": "Los Angeles Times",
                    "publishedDate": "Tue, 21 Jul 2015 18:10:55 -0700",
                    "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://www.latimes.com/entertainment/tv/showtracker/la-et-st-obama-daily-show-20150721-htmlstory.html&cid=52778904594715&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNHIbHVXhP3HY484QZS5TLgzyIdFWA",
                    "language": "en"
                  },
                  {
                    "unescapedUrl": "http://www.takepart.com/video/2015/07/22/daily-show-obama",
                    "url": "http%3A%2F%2Fwww.takepart.com%2Fvideo%2F2015%2F07%2F22%2Fdaily-show-obama",
                    "title": "See Jon Stewart and <b>Barack Obama</b> Spar Over Vet Rights in Last &#39;Daily Show <b>...</b>",
                    "titleNoFormatting": "See Jon Stewart and Barack Obama Spar Over Vet Rights in Last &#39;Daily Show ...",
                    "location": "",
                    "publisher": "TakePart",
                    "publishedDate": "Wed, 22 Jul 2015 12:15:50 -0700",
                    "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://www.takepart.com/video/2015/07/22/daily-show-obama&cid=52778904594715&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNHFQZcbisbvzeehIDTff9S6X_fIBw",
                    "language": "en"
                  },
                  {
                    "unescapedUrl": "http://variety.com/2015/tv/ratings/barack-obama-daily-show-ratings-jon-stewart-1201545865/",
                    "url": "http%3A%2F%2Fvariety.com%2F2015%2Ftv%2Fratings%2Fbarack-obama-daily-show-ratings-jon-stewart-1201545865%2F",
                    "title": "<b>Barack Obama</b> Appearance Spikes &#39;The Daily Show&#39; Ratings | Variety",
                    "titleNoFormatting": "Barack Obama Appearance Spikes &#39;The Daily Show&#39; Ratings | Variety",
                    "location": "",
                    "publisher": "Variety",
                    "publishedDate": "Wed, 22 Jul 2015 13:37:30 -0700",
                    "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://variety.com/2015/tv/ratings/barack-obama-daily-show-ratings-jon-stewart-1201545865/&cid=52778904594715&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNGi-IyrrYnMQC3MHdlS0nhyxxKDnw",
                    "language": "en"
                  }
                ]
              },
              {
                "GsearchResultClass": "GnewsSearch",
                "clusterUrl": "",
                "content": "Nigerians may have reason to feel that <b>Barack Obama</b> is giving them the cold shoulder. Though he hosted Nigeria&#39;s president, Muhammadu Buhari, in Washington, DC, this week, the US president has never set foot in the country himself. On what looks like&nbsp;...",
                "unescapedUrl": "http://qz.com/461501/barack-obama-has-big-plans-for-nigeria-and-africa-you-just-cant-see-them-yet/",
                "url": "http%3A%2F%2Fqz.com%2F461501%2Fbarack-obama-has-big-plans-for-nigeria-and-africa-you-just-cant-see-them-yet%2F",
                "title": "<b>Barack Obama</b> has big plans for Nigeria and Africa—you just can&#39;t see them yet <b>...</b>",
                "titleNoFormatting": "Barack Obama has big plans for Nigeria and Africa—you just can&#39;t see them yet ...",
                "location": "",
                "publisher": "Quartz",
                "publishedDate": "Wed, 22 Jul 2015 12:07:30 -0700",
                "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://qz.com/461501/barack-obama-has-big-plans-for-nigeria-and-africa-you-just-cant-see-them-yet/&cid=52778906729587&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNE0PTXMSnhA1IOhWIm3Hyq5nlsIpA",
                "language": "en"
              },
              {
                "GsearchResultClass": "GnewsSearch",
                "clusterUrl": "",
                "content": "<b>Barack</b> and Auma first met in Chicago when they both were in their twenties, after the President invited her to the United States in a letter. While their shared last name has opened many doors for Auma <b>Obama</b>, she&#39;s built a Kenya-based foundation, Sauti <b>...</b>",
                "unescapedUrl": "http://www.cnn.com/2015/07/22/politics/obama-family-kenya-brooke-baldwin/",
                "url": "http%3A%2F%2Fwww.cnn.com%2F2015%2F07%2F22%2Fpolitics%2Fobama-family-kenya-brooke-baldwin%2F",
                "title": "<b>Obama&#39;s</b> sister: &#39;My brother has carried our name&#39; - CNNPolitics.com - CNN.com",
                "titleNoFormatting": "Obama&#39;s sister: &#39;My brother has carried our name&#39; - CNNPolitics.com - CNN.com",
                "location": "",
                "publisher": "CNN",
                "publishedDate": "Wed, 22 Jul 2015 15:56:52 -0700",
                "signedRedirectUrl": "http://news.google.com/news/url?sa=T&ct2=us&fd=S&url=http://www.cnn.com/2015/07/22/politics/obama-family-kenya-brooke-baldwin/&cid=0&ei=TR-xVfilEMzSqQXc2ZeIBg&usg=AFQjCNHjdxX5uCeO5x-tLfNayrlukpHIxg",
                "language": "en",
                "image": {
                  "url": "http://i2.cdn.turner.com/cnnnext/dam/assets/150722092743-president-obamas-half-sister-interview-brooke-baldwin-newday-00004918-large-169.jpg",
                  "tbUrl": "http://t3.gstatic.com/images?q=tbn:ANd9GcSccJQzlFY6B1Uk0Q15RsrNZpvShZdYRftBTBHuRMv_X5HMJv-m_-yFksnn",
                  "originalContextUrl": "http://www.cnn.com/2015/07/22/politics/obama-family-kenya-brooke-baldwin/",
                  "publisher": "CNN",
                  "tbWidth": 80,
                  "tbHeight": 45
                }
              }
            ],
            "cursor": {
              "pages": [
                {
                  "start": "0",
                  "label": 1
                },
                {
                  "start": "4",
                  "label": 2
                },
                {
                  "start": "8",
                  "label": 3
                },
                {
                  "start": "12",
                  "label": 4
                },
                {
                  "start": "16",
                  "label": 5
                },
                {
                  "start": "20",
                  "label": 6
                },
                {
                  "start": "24",
                  "label": 7
                },
                {
                  "start": "28",
                  "label": 8
                }
              ],
              "estimatedResultCount": "17339638",
              "currentPageIndex": 0,
              "moreResultsUrl": "http://news.google.com/nwshp?oe=utf8&ie=utf8&source=uds&q=barack+obama&hl=en&start=0"
            }
          },
          "responseDetails": null,
          "responseStatus": 200
        };

      return{

        getNews: function() {
          return data.responseData.results;
        }

    };
  });

})();
