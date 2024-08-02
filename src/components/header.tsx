import { ModeToggle } from "@/components/modal-toggle";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <div className="flex justify-between">
            <div className="flex h-5 items-center space-x-4 text-sm">
                <Link href={"/login"}>Login</Link>
                <Separator orientation="vertical" />
                <Link href={"/register"}>Register</Link>
            </div>
            <ModeToggle />
        </div>
    );
}
