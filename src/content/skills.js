import {ReactComponent as reactIcon} from '../assets/icons/react.svg'
import {ReactComponent as reduxIcon} from '../assets/icons/redux.svg'
import {ReactComponent as htmlIcon} from '../assets/icons/html-1.svg'
import {ReactComponent as cssIcon} from '../assets/icons/css-3.svg'
import {ReactComponent as jsIcon} from '../assets/icons/logo-javascript.svg'
import {ReactComponent as figmaIcon} from '../assets/icons/figma-1.svg'
import {ReactComponent as pythonIcon} from '../assets/icons/python-5.svg'
import {ReactComponent as qtIcon} from '../assets/icons/qt-1.svg'
import {ReactComponent as cppIcon} from '../assets/icons/c.svg'
import {ReactComponent as opencvIcon} from '../assets/icons/opencv.svg'
import {ReactComponent as tensorflowIcon} from '../assets/icons/tensorflow-2.svg'

export const skills = [
    {
        title: 'Web Frontend Development',
        description: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
        tech: [
            {
                name: 'ReactJs' ,
                icon: reactIcon,
            },
            {
                name: 'HTML' ,
                icon: htmlIcon,
            },
            {
                name: 'CSS' ,
                icon: cssIcon,
            },
            {
                name: 'Javascript' ,
                icon: jsIcon,
            },
            {
                name: 'Redux' ,
                icon: reduxIcon,
            },
            {
                name: 'Figma' ,
                icon: figmaIcon,
            },
        ]
    },
    {
        title: 'Desktop Graphical Application Development',
        description: 'I have vast experience building highly interactive and performant cross platform desktop apps.',
        tech: [
            {
                name: 'Python' ,
                icon: pythonIcon,
            },
            {
                name: 'Qt' ,
                icon: qtIcon,
            },
        ]    
    },
    {
        title: 'Computer Vision and Video Analytics',
        description: 'I am capable of applying mainstream vision algorithms, and presenting them effectively to the user',
        tech: [
            {
                name: 'OpenCV' ,
                icon: opencvIcon,
            },
            {
                name: 'C++' ,
                icon: cppIcon,
            },
            {
                name: 'Python' ,
                icon: pythonIcon,
            },
            {
                name: 'Tensorflow' ,
                icon: tensorflowIcon,
            },
        ]    
    }
]

