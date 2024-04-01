"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

export function Header() {
    const session = useSession();
    return (
        <header>
            <div>
                {session.data ? (
                    <Button onClick={() => signIn("")}>Signout</Button>
                ) : (
                    <Button onClick={() => signIn("google")}>Signin</Button>
                )}
                <ModeToggle />
            </div>
        </header>
    );
}
