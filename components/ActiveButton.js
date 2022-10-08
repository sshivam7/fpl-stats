import React from "react";
import Link from "next/link";

export default function ActiveButton(props) {
    return (
        <Link href={props.href}>
            <a className="font-roboto px-10 shadow rounded-md bg-gradient-to-r from-purple-400 to-pink-600 border-none text-white py-2 hover:border-solid hover:border-2 hover:border-pink-600 hover:text-neutral-800 hover:bg-none">{props.text}</a>
        </Link>
    );
}