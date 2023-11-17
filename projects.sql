-- CREATE DATABASE Projects_db;

CREATE TABLE FinishedProjects (
  ID int NOT NULL AUTO_INCREMENT,
  ProjectName varchar(225) NOT NULL,
  Tags varchar(225) NOT NULL,
  ProjectStatus boolean default 0,
  Image1 varchar(200),
  Image2 varchar(200),
  Image3 varchar(200),
  Image4 varchar(200),
  Image5 varchar(200),
  GithubStatus boolean default 0,
  GithubLink varchar(225),
  Sitelink varchar(225) NOT NULL,
  ProjectDescription varchar(2000) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO FinishedProjects (ProjectName, Tags, ProjectStatus, Image1, Image2, Image3, Image4, Image5, GithubStatus, GithubLink, Sitelink, ProjectDescription)
VALUES ('Johnston Robotics', 'Css, Wordpress, Divi, CMS', 1, './projects/wordpress/johnstonrobotics/jr1.png', './projects/wordpress/johnstonrobotics/jr2.png', './projects/wordpress/johnstonrobotics/jr3.png', NULL, NULL, 0, NULL, 'https://johnstonrobotics.org', 'I built this website during my internship with Webspec in the summer of 2021. It was a 3 month internship during which I worked with 3 other women to build a free website for the Johnston School District’s local robotics team. Each person in the internship program had a distinct role. Mine was acting as the web developer, in which I spun up, built, and launched the site.
The site was designed by the design intern and I used Wordpress for the site while Divi was used for the theme. I had worked with Gutenburg before this project, so Divi was a bit of a pleasant surprise. Despite Divi being so user friendly, I still struggled a bit with designing the “blobs” that are seen throughout the site. I used divi’s margins or position absolute to push the blob’s into place. However, now that I’m more experienced with front-end development, I think I would have used ::before and ::after elements to attach them
There was an issue with the blob’s disappearing. I used the wordpress fastest cache to solve this problem. It helped to save on processing and loading speeds for the site.
'), ('801 Grand', 'Css, Wordpress, Avada, CMS', 1, './projects/wordpress/801grand/grand1.png', './projects/wordpress/801grand/grand2.png', './projects/wordpress/801grand/grand3.png', NULL, NULL, 0, NULL, 'https://801grand.com', '801 Grand was a co-project between myself and a senior developer with Webspec. It was my first project with Webspec after they hired me full time. I believe the senior developer spun up the site and built the homepage, header, footer, and global styling. I used his global stylings to build the inner pages, including the contact page. 
The designing team provided an Adobe style guide to follow as we built the site. I think the toughest part about 801 grand was adding the extra details and ensuring that the bars and image backgrounds were responsive and didn’t shift or overlap text in mobile or tablet mode. 
The image of Des Moines’ Principal building on this page was particularly difficult in that it kept shifting downwards in inspect. Not only that but it would shift off the page or onto the text paragraphs on the right. I used margin calc to keep it in place, but now that I think about it, I would have tried adding a min-height and min-width to keep it at the correct size.'), ('ISU Pappajohn Center for Entrepreneurship', 'CSS, Sass, Wordpress, Custom Theme, BitBucket, CMS, PHP, PHPMYADMIN', 1, './projects/wordpress/pappaJohns/pappaJohns1.png', './projects/wordpress/pappaJohns/pappaJohns2.png', './projects/wordpress/pappaJohns/pappaJohns3.png', NULL, NULL, 0, NULL, 'https://www.isupjcenter.org', 'I built the homepage for ISU’s Pappajohn Center for Entrepreneurship. The site had already been built using a custom theme, they just wanted to completely redesign the frontpage. To do this, I brought the site down to my local computer using bitbucket and installed node sass using npm. I recreated the front page’s theme file and then used the Advanced Custom Field’s plugin and wordpress’s built in programming language to make the changes I needed. 
It was a pretty straightforward task. I hadn’t had much experience with Sass and Npm at the time, so the installation process definitely could have gone smoother. Other than that, I think the project required a lot of out of the box thinking and preplanning.'), ('ISU Pappajohn Center for Entrepreneurship Kiosk', 'CSS, Sass, Wordpress, Custom Theme, CMS, PHP, PHPMYADMIN', 1, './projects/wordpress/pappaJohns/pappaKiosk1.png', NULL, NULL, NULL, NULL, 0, NULL, 'https://www.isupjcenter.org/kiosk-page/', 'I also built a kiosk page for ISU’s Pappajohn Center for Entrepreneurship. I believe student’s and visitor’s use this site at the kiosks located in universities Pappajohn Center.'), ('Safe & Sound', 'Drupal, Css, Sass, Npm, Twig, CMS', 1,'./projects/drupal/safeandsound/ss1.png', './projects/drupal/safeandsound/ss2.png', './projects/drupal/safeandsound/ss3.png', './projects/drupal/safeandsound/ss4.png', './projects/drupal/safeandsound/ss5.png', 0, NULL, 'https://dps.iowa.gov/SafeandSoundIowa', 'Safe and Sound was my second Drupal project and probably the most complicated project I’ve navigated so far. It was a subsite for dps.iowa and it was created with the intent of providing young school students with a safe space to report bullying or troubling behavior. 
The site uses Drupal Twig templating, reusable blocks, and content types. The site didn’t have a base theme, so I had to rely on content types and fields to build the pages, footers, and headers. Also, the administrators of the site needed the ability to add more pages using similar and different designs. 
If the site had used paragraphs, then this would have been a simple feat. However, it didn’t and we didn’t have the budget to add paragraphs. Instead, I created a mini cms system using content types with backend styling to ensure that whatever they added to their custom pages remained responsive and non-developer friendly. At this point, I believe the parents page and the student’s page were both created by the administrators. 
Looking back at it, I think I would have taken the time and effort to have installed and set up paragraphs. I also would have used views on the faqs page and other listed sections. 
Extra note: Personally my favorite page was the school’s page. It has so many moving parts and I’m particularly proud of the responsive design in the graph. I used position absolute to position the text bubbles and an svg for the graph. This all disappears in mobile and is replaced with a sensible list. I also used twig to customize the color boxes on the bottom of the page. Using the cms, you can input hex color for the text and background which is applied to the box.'), ('StopHT Iowa', 'Drupal, Css, Sass, Npm, Twig, CMS', 1, './projects/drupal/stopht/ht1.png', './projects/drupal/stopht/ht2.png', NULL, NULL, NULL, 0, NULL, 'https://stophtiowa.org', 'This was my first Drupal project and while it was definitely much more complicated than Wordpress, it was a good Drupal starter project. I was instructed to redesign four webpages for StopHTIowa: the homepage, UnderstandHT, Training Library, and Lodging Providers.
I used reusable blocks for the banners, content types for the sections on the homepage, and paragraphs for the inner pages. I think, considering how varied the content of the other pages were, using paragraphs and reusable blocks was a good idea. I had to use media queries for a variety of sections, but I think that was unavoidable.
'), ('Virtual Piano', 'Vue, Javascript, JSON, CSS, Sass, Npm, PHP, OOP', 1, './projects/programming/piano/piano1.png', './projects/programming/piano/piano2.png', NULL, NULL, NULL, 1, 'https://github.com/TameraP/pianoProject.git', 'comingSoon', 'This was my first vue project. I created it to practice vue and php oop. The php is a bit sparse, it really helped me practice my basics. The notes definitely don’t match, but I’m still happy with how it worked out. The only thing I wish I could have fixed was the save and replay button. When you push save, the piano begins to save your notes and on replay, it plays it back. I wanted the virtual piano to forget your notes each time you pushed save but I couldn’t get the array to clear. The only way to clear the array is by pushing refresh, which refreshes the page itself. I hope to shadow an experienced Vue developer to learn more tricks and skills.');


CREATE TABLE CurrentProjects (
  ID int NOT NULL AUTO_INCREMENT,
  ProjectName varchar(225) NOT NULL,
  Tags varchar(225) NOT NULL,
  ProjectStatus boolean default 0,
  Image1 varchar(200),
  Image2 varchar(200),
  Image3 varchar(200),
  Image4 varchar(200),
  Image5 varchar(200),
  Image6 varchar(200),
  Image7 varchar(200),
  Image8 varchar(200),
  GithubStatus boolean default 0,
  GithubLink varchar(225),
  Sitelink varchar(225) NOT NULL,
  ProjectDescription varchar(2000) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO CurrentProjects (ProjectName, Tags, ProjectStatus, Image1, Image2, Image3, Image4, Image5, GithubStatus, GithubLink, Sitelink, ProjectDescription)
VALUES ('Drupal Animal Shelter', 'Drupal, Twig, Gulp, Css, Sass, npm, Javascript, Jquery, Canvas', 0, NULL, NULL, NULL, NULL, NULL, 1, 'Coming Soon', 'ComingSoon', 'This was a small project I created while I was learning Drupal. I focused primarily on frontend development as I learned how to install and utilize common development tools. I practiced learning Drupal views and created the homepage revolving banner using views, css, and drupal’s behavior object in tandem with javascript and jquery.
I created a custom theme to act as the secondary theme and used twig to customize the site’s layout. I installed the (*) module to load dummy text and content throughout the site. I also dabbled a little with canvas to create the automated paw prints that loaded on scroll. It’s definitely not the prettiest site, but I think it acts as a great showcase of my skills.'), ('Virtual Candyland', 'Vue, Javascript, JSON, CSS, Sass, Npm, PHP, OOP, PDO, MYSQL, SQL, Docker, SequelAce', 0, './projects/programming/candyland/cl1.png', './projects/programming/candyland/cl2.png', './projects/programming/candyland/cl3.png', NULL, NULL, 1, 'https://github.com/TameraP/candyland.git', 'comingSoon', 'This is my second vue project. I’m attempting to create a virtual candyland that allows players to create a login which takes them to their player profile. There they can update their credentials and start a fairly basic version of the game. The game should save their progress and restart them where they left when they log back in. So far I’ve put all of my time into styling and setting up the login. I’ve used the javascript fetch api to communicate with the db and insert new users into the database. There, my php class can verify the username and password. 
The concerns I’m running into when it comes to developing the project are consistent with those I ran into while developing my virtual piano. I’ve had to use the “bus” system to communicate between vue components and I just wonder if there’s a better, more efficient way of building the project. I guess this comes with experience and shadowing veteran vue developers. Otherwise, it’s coming along nicely
I’m using docker and sequelace to create a mock db. I also used docker-composer.yml to create phpmyadmin, but I think the sequelace works smoother. 
');