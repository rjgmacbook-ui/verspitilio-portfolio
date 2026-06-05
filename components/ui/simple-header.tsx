'use client';

import React from 'react';
import { Sheet, SheetContent, SheetFooter, SheetTitle } from '@/components/ui/sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Button, buttonVariants } from '@/components/ui/button';
import { MenuToggle } from '@/components/ui/menu-toggle';

const BatIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg
        className={className}
        viewBox="0 0 100 60"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={style}
    >
        <path d="M50 30
      C50 20 44 10 35 8
      C28 6 20 10 15 5
      C10 0 5 2 2 6
      C8 8 12 14 10 20
      C8 26 2 28 0 34
      C6 32 12 30 18 34
      C22 37 24 44 28 48
      C32 52 38 54 42 50
      C45 47 46 42 50 40
      C54 42 55 47 58 50
      C62 54 68 52 72 48
      C76 44 78 37 82 34
      C88 30 94 32 100 34
      C98 28 92 26 90 20
      C88 14 92 8 98 6
      C95 2 90 0 85 5
      C80 10 72 6 65 8
      C56 10 50 20 50 30Z
      M50 38 C47 42 44 46 50 50 C56 46 53 42 50 38Z" />
    </svg>
);

export function SimpleHeader() {
    const [open, setOpen] = React.useState(false);

    const links = [
        { label: 'Work', href: '#' },
        { label: 'About', href: '#' },
        { label: 'Contact', href: '#' },
    ];

    const navStyle: React.CSSProperties = {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.25em',
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-sm"
            style={{ borderBottom: '1px solid rgba(232,224,208,0.08)', background: 'transparent' }}
        >
            <nav className="mx-auto flex h-16 w-full items-center justify-between px-8 md:px-16">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <BatIcon className="w-8 h-5 opacity-90" style={{ color: '#e8e0d0' }} />
                    <div className="leading-none">
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', letterSpacing: '0.25em', fontWeight: 600, color: '#e8e0d0' }}>
                            VESPERTILIO
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.3em', opacity: 0.5, marginTop: '2px', color: '#e8e0d0' }}>
                            MOTION PICTURES
                        </div>
                    </div>
                </div>

                {/* Desktop links */}
                <div className="hidden items-center gap-6 lg:flex">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="transition-opacity duration-300 hover:opacity-100"
                            style={{ ...navStyle, opacity: 0.6, textTransform: 'uppercase', color: '#e8e0d0', textDecoration: 'none' }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#"
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6rem',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            color: '#0a0a0a',
                            background: '#c9a84c',
                            padding: '0.6rem 1.4rem',
                            textDecoration: 'none',
                            transition: 'background 0.3s ease',
                            display: 'inline-block',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#e8e0d0')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = '#c9a84c')}
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Mobile hamburger */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="lg:hidden"
                        style={{ color: '#e8e0d0', border: '1px solid rgba(232,224,208,0.2)' }}
                    >
                        <MenuToggle
                            strokeWidth={2.5}
                            open={open}
                            onOpenChange={setOpen}
                            className="size-6"
                        />
                    </Button>
                    <SheetContent
                        side="left"
                        showClose={false}
                        style={{ background: 'rgba(10,10,10,0.97)', borderRight: '1px solid rgba(232,224,208,0.08)' }}
                        className="backdrop-blur-lg"
                    >
                        <VisuallyHidden.Root>
                            <SheetTitle>Navigation</SheetTitle>
                        </VisuallyHidden.Root>
                        {/* Sheet logo */}
                        <div className="flex items-center gap-3 px-4 pt-6 pb-2">
                            <BatIcon className="w-8 h-5 opacity-90" style={{ color: '#e8e0d0' }} />
                            <div className="leading-none">
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', letterSpacing: '0.25em', fontWeight: 600, color: '#e8e0d0' }}>
                                    VESPERTILIO
                                </div>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.3em', opacity: 0.5, marginTop: '2px', color: '#e8e0d0' }}>
                                    MOTION PICTURES
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-y-1 overflow-y-auto px-4 pt-8 pb-5">
                            {links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="flex items-center py-2 transition-opacity hover:opacity-100"
                                    style={{ ...navStyle, opacity: 0.6, textTransform: 'uppercase', color: '#e8e0d0', textDecoration: 'none' }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <SheetFooter style={{ borderTop: '1px solid rgba(232,224,208,0.08)', background: 'transparent' }}>
                            <a
                                href="#"
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.6rem',
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    color: '#0a0a0a',
                                    background: '#c9a84c',
                                    padding: '0.75rem',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    display: 'block',
                                    width: '100%',
                                    transition: 'background 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = '#e8e0d0')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = '#c9a84c')}
                            >
                                Get in Touch
                            </a>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}
