import jumia from './assets/16544.jpg';
import weather from './assets/52335-O7424P.jpg';
import backend from "./assets/django.jpg";
import movie from './assets/social_media_holy_week_good_friday.jpg';
import blog from './assets/teamwork-making-online-blog.jpg'

const projects = [
    {
    title: "Weather App",
    description: "A clean UI for checking current weather using OpenWeather API.",
    image: `${weather}`,
    tech: ["React", "CSS", "API"],
    github: "https://github.com/Melgreat/js-weather-app"
    },
    {
    title: "Movie Search",
    description: "A searchable movie list using DMDB API.",
    image: `${movie}`,
    tech: ["React", "Styled Components", "API"],
    github: "https://github.com/Melgreat/Movie-streaming-app-with-React"
    },
    {
    title: "Jumia Ecommerce Site Clone",
    description: "A replica of the popular Jumia site with payment integration.",
    image: `${jumia}`,
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Melgreat/Jumia-clone-app"
    },
    {
    title: "Blog Backend API",
    description: "Backend Api for my personal blog project using Django rest framework.",
    image: `${backend}`,
    tech: ["JavaScript", "Django", "Django RestFramework"],
    github: "https://github.com/Melgreat/Blog-backend_api"
    },
    {
    title: "Melvin Blog App",
    description: "A personal blog project for reading and uploading articles.",
    image: `${blog}`,
    tech: ["JavaScript", "CSS", "API", "HTML"],
    github: "https://github.com/Melgreat/Melvin-s-Blog"
    },
];

export default projects 