
function SingleComment() {
    return (
        <>
            {/* component */}
            <div className="snap-center overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        {/* Header of the table */}
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        <tr className="hover:bg-gray-50">
                            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                <div className="relative h-10 w-10">
                                    <img
                                        className="h-full w-full rounded-full object-cover object-center"
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
                                </div>

                            </th>
                            <td className=" lg:px-6 py-1 lg:py-4">
                                <div className="flex gap-1 md:gap-2">
                                    <b className="sm:text-left md:text-justify text-blue md:text-black  h-20 md:h-auto overflow-auto bg-violet-50 text-[10px] lg:text-md xl:font-extrabold text-violet-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui, quod quas, sint, dolorum non nulla maxime a optio eveniet quis aliquid minus voluptatem tenetur esse dolor. Id, optio rem illo architecto ullam eveniet totam ipsa nam tenetur, repudiandae distinctio ex sapiente numquam adipisci earum. Officiis illo a rem ipsam quia praesentium nam tempora, tempore ipsa amet tenetur libero iste distinctio dicta illum quidem dolore, ex inventore! Et illo perspiciatis rem maxime. Magni eos explicabo obcaecati? Aperiam, illo! Accusamus deleniti veniam in quis soluta officiis dolore, assumenda omnis repudiandae magni a sapiente ea quibusdam reiciendis deserunt quos nisi vel explicabo.
                                    </b>
                                </div>
                            </td>
                            <td className="px-6 py-4">

                                {/* TODO: when own comment : this area will vissible */}
                                <div className="flex justify-end gap-4">
                                    <div x-data="{ tooltip: 'Delete' }" href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                            x-tooltip="tooltip"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                    </div>
                                    <div x-data="{ tooltip: 'Edite' }" href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                            x-tooltip="tooltip"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                            />
                                        </svg>
                                    </div>
                                    {/* TODO:  when is not own comment */}
                                    {/* <div><span>a day ago</span></div> */}
                                </div>



                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default SingleComment;