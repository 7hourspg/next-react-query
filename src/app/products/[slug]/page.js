"use client";
import React, {useEffect} from "react";
import {useParams} from "next/navigation";
import Card from "../card";

function page() {
   const {slug} = useParams();

   return <Card slug={slug} />;
}

export default page;
