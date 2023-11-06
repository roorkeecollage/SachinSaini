import {GoHomeFill} from 'react-icons/go'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BiSolidMicrophone} from 'react-icons/bi'
import ytLogo from './image/yt-Logo.png'
import searchIcon from './image/search.png'
 
 <div>
         <div class="header">
        <div class="header-iteam header-logo">
            <div class="header-first"></div>
            <div class="header-second">
                <img id='yt-Logo' src={ytLogo}/>
            </div>
        </div>
        <div class="header-iteam header-center">
            {/* <div class="header-search"></div> */}
            <input class="header-search" placeholder='Search...'/>
            <button class="search-button">
                <img class="small-image" src={searchIcon}></img>
            </button>
            <div class="header-mic"></div>
        </div>
        <div class="header-iteam header-proflie">
            <div class="header-tools"></div>
        </div>
        </div>
        <div class="main-section">
            <div class="main-left">
                <button class="yt-side-button">
                    <GoHomeFill /> <span class="side-button-label">Home</span>
                </button>
                <button class="yt-side-button">
                    <GoHomeFill /> <span class="side-button-label">Home</span>
                </button>
                <button class="yt-side-button">
                    <GoHomeFill /> <span class="side-button-label">Home</span>
                </button>
                <hr/>
                <button class="yt-side-button">
                    <GoHomeFill /> <span class="side-button-label">Home</span>
                </button> <button class="yt-side-button">
                    <GoHomeFill /> <span class="side-button-label">Home</span>
                </button> <button class="yt-side-button">
                    <GoHomeFill /> <span class="side-button-label">Home</span>
                </button>
            </div>