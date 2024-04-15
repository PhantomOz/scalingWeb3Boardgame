"use client"
import Fen from "chess-fen/dist/Fen";
import Square from "../../components/Square";
import { useEffect, useState } from "react";
import { BOARD_CONTENT, BoardContent } from "chess-fen";

export default function Arena() {
    const [draggedElement, setDElement] = useState<[EventTarget, BoardContent, HTMLDivElement]>();
    const [turn, setTurn] = useState<boolean>(false);
    const [pieces, setPieces] = useState<Fen>(new Fen(Fen.startingPosition));

    // useEffect(() => {
    //     if (draggedElement === undefined) {
    //         if (turn) {
    //             // setPieces(new);
    //             setPieces(new Fen().clear("e2").update("e4", BOARD_CONTENT.P));
    //             console.log(pieces.printBoard());
    //         }
    //     }
    // }, [draggedElement]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <div className="flex flex-row w-[560px] gap-4 items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-t-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <div className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"></div>
                    <div>
                        <p>0x123uifdriew9w9wq0q9wqw</p>
                        <p>1443</p>
                    </div>
                    <div className="border-b ml-auto border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        <p>10:00</p>
                    </div>
                </div>
                <div className={`z-10 w-[560px] h-[560px] flex flex-row ${"flex-wrap"}`}>
                    {pieces?.board.map((piece, index) => piece.map((pie, ind) => <Square key={8 * index + ind} piece={pie} index={8 * index + ind} setDElement={setDElement} draggedElement={draggedElement} board={pieces} setPieces={setPieces} />))}
                </div>
                <div className="flex flex-row w-[560px] gap-4 items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-b-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <div className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"></div>
                    <div>
                        <p>0x123uifdriew9w9wq0q9wqw</p>
                        <p>1443</p>
                    </div>
                    <div className="border-b ml-auto border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        <p>10:00</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
