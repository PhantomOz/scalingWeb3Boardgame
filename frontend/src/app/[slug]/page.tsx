/* eslint-disable react/no-unescaped-entities */
'use client'
import { useParams } from 'next/navigation';
import { Button, Card, Flex, Text } from '@radix-ui/themes';
import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { Profile2User, User, WifiSquare } from "iconsax-react";
import Image from 'next/image';
import { games } from '@/components/common/Constants';
import Link from 'next/link';

const page = () => {
    const params = useParams<{ slug: string }>();
    const gameType = params.slug;

    const gameToDisplay = games.find(game => game.title === gameType);

    if (!gameToDisplay) {
        return <div>No game found for the specified title.</div>;
    }
    const { title, description, image, youtubeId, youtubeTitle } = gameToDisplay

    return (
        <div className='flex bg-homeBack justify-center '>
            <div className='max-w-[1280px] justify-center  flex flex-row gap-12 flex-wrap my-12'>
                <Flex direction="column" gap="6" maxWidth="450px">
                    <Text className='text-3xl font-bold text-white'>Play the game of {title}</Text>
                    <Card variant="surface" className='w-[450px]' >
                        <Text as="div" size="2" weight="bold" className='flex gap-2 items-center'>
                            <User size="32" color="#111827" /> Single player
                        </Text>
                        <Text as="div" color="gray" size="2" my={"3"}>
                            Play against the computer in your browser.
                        </Text>
                        <Flex justify={"end"}>
                            {title === "Chess" ?
                                <Link href={"/play"}>

                                    <Button className='flex justify-end items-center '>
                                        Play
                                    </Button>  </Link> :
                                <Button className='flex justify-end items-center' disabled>
                                    Coming Soon
                                </Button>}
                        </Flex>
                    </Card>
                    <Card variant="surface">
                        <Text as="div" size="2" weight="bold" className='flex gap-2 items-center'>
                            <Profile2User size="32" color="#111827" /> Mutiplayer (local)
                        </Text>
                        <Text as="div" color="gray" size="2" my={"3"}>
                            Share your device and play with a friend locally.
                        </Text>
                        <Flex justify={"end"}>

                            <Button className='flex justify-end items-center' disabled>
                                Coming Soon
                            </Button>
                        </Flex>
                    </Card>
                    <Card variant="surface">
                        <Text as="div" size="2" weight="bold" className='flex gap-2 items-center'>
                            <WifiSquare size="32" color="#111827" className='flex gap-2 items-center' /> Mutiplayer (online)
                        </Text>
                        <Text as="div" color="gray" size="2" my={"3"}>
                            Share a link and play with a friend online.
                        </Text>
                        <Flex justify={"end"}>

                            <Button className='flex justify-end items-center' disabled>
                                Coming Soon
                            </Button>
                        </Flex>
                    </Card>
                </Flex>
                <Flex maxWidth={"550px"} direction="column" gap={"4"}>
                    <div>
                        <Image src={image} alt="Chess" height={250} width={550} className="rounded-lg"
                        />
                    </div>

                    <p className='text-white text-xl'>
                        {description}
                    </p>
                    <div className='h-[350px] w-full'>
                        <LiteYouTubeEmbed
                            id={youtubeId}
                            title={youtubeTitle}
                            className="rounded-lg"
                        />
                    </div>
                </Flex>
            </div>
        </div>
    )
}

export default page