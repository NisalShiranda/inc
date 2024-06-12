import React from 'react'
import "./Skills.css"
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { SlLayers } from "react-icons/sl";
import { BsTrophy } from "react-icons/bs";

function Skills() {
  return (
    <>
        <div className="skills-container px-5 sm:px-32 py-16 grid grid-cols-1 justify-center items-center sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4">
            <div className="grid grid-cols-1 justify-center items-center sm:grid sm:grid-cols-2">
                <div className="flex justify-center items-center sm:justify-end sm:items-end"><IoSettingsOutline className="text-5xl " /></div>
                <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start sm:pl-2 ">
                    <p className="font-bold">+256</p>
                    <p className="font-light">PLUGINS</p>
                </div>
            </div>
            <div className="grid grid-cols-1 justify-center items-center sm:grid sm:grid-cols-2">
                <div className="flex justify-center items-center sm:justify-end sm:items-end"><IoPersonAddOutline className="text-5xl " /></div>
                <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start sm:pl-2 ">
                    <p className="font-bold">+1256</p>
                    <p className="font-light">CLIENTS</p>
                </div>
            </div>
            <div className="grid grid-cols-1 justify-center items-center sm:grid sm:grid-cols-2">
                <div className="flex justify-center items-center sm:justify-end sm:items-end"><SlLayers className="text-5xl " /></div>
                <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start sm:pl-2 ">
                    <p className="font-bold">+7653</p>
                    <p className="font-light">PROJECTS</p>
                </div>
            </div>
            <div className="grid grid-cols-1 justify-center items-center sm:grid sm:grid-cols-2">
                <div className="flex justify-center items-center sm:justify-end sm:items-end"><BsTrophy className="text-5xl " /></div>
                <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start sm:pl-2 ">
                    <p className="font-bold">+27</p>
                    <p className="font-light">AWARDS</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills