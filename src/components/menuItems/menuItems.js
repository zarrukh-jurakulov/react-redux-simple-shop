import React from 'react'
import classes from './styles.module.css'
import {GiSmartphone} from 'react-icons/gi'
import {GoTriangleRight} from 'react-icons/go'
import {AiOutlineLaptop, AiFillSetting} from 'react-icons/ai'
import {HiDesktopComputer} from 'react-icons/hi'
import {DiHtml5DeviceAccess} from 'react-icons/di'
import {MdTabletAndroid, MdVideogameAsset} from 'react-icons/md'
import {FaDigitalTachograph} from 'react-icons/fa'
import {CgScreen, CgClapperBoard} from 'react-icons/cg'
import {FiHeadphones} from 'react-icons/fi'
import {FaUniversalAccess, FaMouse} from 'react-icons/fa'

const MenuItems = () => {
    return (
        <div className={classes.root}>
             <div className={classes.content}>
                <div className={classes.contentItems}>
                    <GiSmartphone className={classes.icon} />
                    <p>Smartphones</p>
                    <GoTriangleRight />
                </div>
                <div className={classes.contentItems}>
                    <AiOutlineLaptop className={classes.icon} />
                    <p>Laptops</p>
                    <GoTriangleRight />
                </div>
                <div className={classes.contentItems}>
                    <HiDesktopComputer className={classes.icon} />
                    <p>Computers</p>
                    <GoTriangleRight />
                </div>
                <div className={classes.contentItems}>
                    <DiHtml5DeviceAccess className={classes.icon} />
                    <p>Accessories</p>
                    <GoTriangleRight />
                </div>
                <div className={classes.contentItems}>
                    <MdTabletAndroid className={classes.icon} />
                    <p>Tablet</p>
                    <GoTriangleRight />
                </div>
                <div className={classes.contentItems}>
                    <MdVideogameAsset className={classes.icon} />
                    <p>Video Games</p>
                    <GoTriangleRight />
                </div>
                <div className={classes.contentItems}>
                    <FaDigitalTachograph className={classes.icon} />
                    <p>Digital Watch</p>
                    <GoTriangleRight />
                </div>
                <div className={classes.contentItems}>
                    <CgScreen className={classes.icon} />
                    <p>Television</p>
                    <GoTriangleRight />
                </div>
                <div className={classes.contentItems}>
                    <CgClapperBoard className={classes.icon} />
                    <p>Appliances</p>
                    <GoTriangleRight />
                </div>
                <div className={classes.contentItems}>
                    <FiHeadphones className={classes.icon} />
                    <p>Audio</p>
                    <GoTriangleRight />
                </div>
                <div className={classes.contentItems}>
                    <FaUniversalAccess className={classes.icon} />
                    <p>Accessories</p>
                    <GoTriangleRight />
                </div>
                <div className={classes.contentItems}>
                    <FaMouse className={classes.icon} />
                    <p>Controls</p>
                    <GoTriangleRight />
                </div>
                <div className={classes.contentItems}>
                    <AiFillSetting className={classes.icon} />
                    <p>Equipment</p>
                    <GoTriangleRight />
                </div>
            </div>
        </div>
    )
}

export default MenuItems
