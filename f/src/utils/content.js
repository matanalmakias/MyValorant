import { homepageUrl } from "../utils/utils";
import { menu } from "./menu";
export const content = {
  chat: {
    messangerBtnText: `Messanger`,
    msgList: [
      {
        _id: `1`,
      },
      {
        _id: `1`,
      },
    ],
  },
  menu,
  heroSection: {
    header: `Unleash Your Full Potential in Valorant`,
    subHeader: `Elevate Your Skills with Personalized Coaching`,
    callToAction: `Get Started`,
  },
  contact: {
    social: [
      { title: `Facebook`, link: `${homepageUrl}/fb` },
      { title: `Twitter`, link: `${homepageUrl}/twitter` },
    ],
    title: `Contact`,
    socialTitle: `Social Media`,
    items: [
      { title: `Email`, text: `info@${homepageUrl}` },
      {
        title: `Customer Support Hours`,
        text: `Sunday to Friday, 9 am to 8 pm (GMT)`,
      },
      {
        title: `Response Time`,
        text: `We strive to respond to all inquiries within 24 hours.`,
      },
    ],
  },
  howItWorks: {
    steps: [
      {
        name: `STEP 1`,
        text: `Register on our platform and create your account.`,
      },
      {
        name: `STEP 2`,
        text: `Explore our coaches' profiles and select the one that matches your requirements.`,
      },
      {
        name: `STEP 3`,
        text: `Book your coaching session based on your availability.`,
      },
      {
        name: `STEP 4`,
        text: `Connect with your coach via our secure video conferencing platform.`,
      },
      {
        name: `STEP 5`,
        text: `Receive personalized guidance, feedback, and training exercises to enhance your gameplay.`,
      },
      {
        name: `STEP 6`,
        text: `Track your progress and schedule additional sessions as needed.`,
      },
    ],
  },
  about: {
    heading: `About`,
    text: `   At yourCoach, we believe that every Valorant player has the
                  potential to reach new heights. Our platform connects you with
                  experienced coaches who provide personalized guidance to help
                  you level up your gameplay and dominate the competition. Join
                  our community and take your skills to the next level!`,
  },
  coachServices: {
    heading: `Coaching Services`,
    items: [
      {
        title: `Individual Sessions`,
        text: `Get ready for personalized one-on-one coaching sessions designed to cater to your specific needs and goals. Our experienced coaches provide tailored feedback, strategic insights, and advanced techniques to accelerate your improvement and help you achieve your full potential in Valorant.`,
      },
      {
        title: `Group Sessions`,
        text: `Join our dynamic group training sessions and immerse yourself in a collaborative environment with like-minded players. Learn from each other, foster teamwork, and develop effective strategies under the guidance of our skilled coaches. Together, you'll enhance your gameplay and take your performance to the next level.`,
      },
      {
        title: `Real Time Coaching`,

        text: `Immerse yourself in the power of real-time coaching, where our expert coaches provide instant feedback and guidance during your gameplay. Experience the thrill of receiving on-the-spot assistance in making strategic decisions, refining your in-game mechanics, and optimizing your overall performance. With real-time coaching, you'll gain a competitive edge and unlock your true potential in Valorant.`,
      },
    ],
  },
  meetTheCoaches: {
    title: `Meet The Coachers`,
    showMoreBtnText: `Show More`,
  },
  becomeAcoach: {
    buttonText: `Become a coach!`,
    becomeAcoachText: `We welcome experienced Valorant players and coaches to join our team of dedicated coaches. If you have a passion for helping others improve and want to share your expertise, apply to become a coach at ValorCoach. Please note that all coach applications will be reviewed and approved by our team to ensure the highest quality coaching for our users. Once approved, you will gain access to the coaching features and be able to connect with players seeking your guidance.`,

    page: {
      title: `Become a coach`,
      subTitle: `Are you passionate about fitness and coaching? Join our team of
            coaches and help individuals achieve their fitness goals.`,
      form: {
        title: `  Fill out the form below and we'll get in touch with you to discuss
            the details.`,
        name: { text: `Name`, placeHolder: `Enter your name` },
        email: { text: `Email`, placeHolder: `Enter your email` },
        phone: { text: `Phone`, placeHolder: `Enter your phone number` },
        msg: {
          text: `Message`,
          placeHolder: `Tell us about your experience and why you want to become a coach`,
        },
        submitText: `Submit`,
      },
    },
  },
};
export const userList = [
  {
    _id: `1`,
    name: `John Doe`,
    msgs: { sentMsgs: [`2`, `3`], recivedMsgs: [`2`, `3`] },
  },
  {
    _id: `2`,
    name: `James Brown`,
    msgs: { sentMsgs: [`1`, `3`], recivedMsgs: [`1`, `3`] },
  },
  {
    _id: `3`,
    name: `John Bones`,
    msgs: { sentMsgs: [`2`, `1`], recivedMsgs: [`1`, `2`] },
  },
];

export const user = {
  _id: `1`,
  name: `John Doe`,
  msgs: { sentMsgs: [`2`, `3`], recivedMsgs: [`1`] },
};
export const msgs = [
  {
    _id: `1`,
    text: `Whatsap ?`,
    sender: { _id: `2`, name: `James Brown` },
    reciver: { _id: `1`, name: `John Doe` },
    date: new Date(`25/05/2023`),
  },
  {
    _id: `2`,
    text: `Whatsap ?`,
    sender: { _id: `1`, name: `James Brown` },
    reciver: { _id: `2`, name: `John Doe` },

    date: new Date(`25/05/2023`),
  },
  {
    _id: `3`,
    text: `Whatsap ?`,
    sender: { _id: `1`, name: `James Brown` },
    reciver: { _id: `3`, name: `John Bones` },

    date: new Date(`25/05/2023`),
  },
  {
    _id: `4`,
    text: `Whatsap ?`,
    sender: { _id: `1`, name: `James Brown` },
    reciver: { _id: `3`, name: `John Bones` },

    date: new Date(`25/05/2023`),
  },
];
export const coacherPageContent = {
  name: `Name`,
  priceForHour: `Price for hour`,
  ratingCount: `Rating count`,
  about: `About`,
  pickBtn: `PICK`,
  msg: `Message`,
  heading2: `Coaches`,
  subHeading: `  Below is a list of coaches available for training. You can message them to discuss your goals and requirements before making a selection.
`,
};
export const coacherList = [
  {
    _id: `1`,
    name: `John Doe`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam consequatur expedita asperiores quos quasi, qui temporibus sint nobis molestiae.`,
    picture: "../assets/pexels-wendy-wei-1656684.jpg",
    priceForHour: 12,
    phone: `0526757706`,
    ratings: [{ name: `User 1`, _id: `1`, stars: 5, text: `Nice coach!` }],
    owner: `1`,
    createdAt: new Date(`10-12-2023`),
  },
  {
    _id: `2`,
    name: `John Doe`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam consequatur expedita asperiores quos quasi, qui temporibus sint nobis molestiae.`,
    picture: "../assets/pexels-wendy-wei-1656684.jpg",
    priceForHour: 12,
    phone: `0526757706`,
    ratings: [{ name: `User 1`, _id: `1`, stars: 5, text: `Nice coach!` }],
    owner: `1`,
    createdAt: new Date(`10-12-2023`),
  },
  {
    _id: `3`,
    name: `John Doe`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam consequatur expedita asperiores quos quasi, qui temporibus sint nobis molestiae.`,
    picture: "../assets/pexels-wendy-wei-1656684.jpg",
    priceForHour: 12,
    phone: `0526757706`,
    ratings: [{ name: `User 1`, _id: `1`, stars: 5, text: `Nice coach!` }],
    owner: `1`,
    createdAt: new Date(`10-12-2023`),
  },
  {
    _id: `4`,
    name: `John Doe`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam consequatur expedita asperiores quos quasi, qui temporibus sint nobis molestiae.`,
    picture: "../assets/pexels-wendy-wei-1656684.jpg",
    priceForHour: 12,
    phone: `0526757706`,
    ratings: [{ name: `User 1`, _id: `1`, stars: 5, text: `Nice coach!` }],
    owner: `1`,
    createdAt: new Date(`10-12-2023`),
  },
];

export const serverConfig = {
  testimonials: {
    title: `Testimonials`,
    items: [
      {
        id: `1`,
        name: `User 1`,
        text: `Great app!`,
        rank: `Diamond 3`,
      },
      {
        id: `2`,
        name: `User 2`,
        text: `Great app!`,
        rank: `Diamond 2`,
      },
      {
        id: `3`,
        name: `User 3`,
        text: `Great app!`,
        rank: `Diamond 1`,
      },
      {
        id: `4`,
        name: `User 4`,
        text: `Great app!`,
        rank: `Ascendant 1`,
      },
    ],
  },
};
