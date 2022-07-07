import React, { useState, useEffect } from 'react'
import { data } from '../data/Data';

const Home = () => {
    const [place, setPlace] = useState('');
    const [bed, setBed] = useState(0);
    const [room, setRoom] = useState(0);
    const [price, setPrice] = useState('');
    const [filteredData, setFilteredData] = useState([]);


    const filterFuncBed = () => {
        if (["1", "2", "3", "4"].includes(bed)) {
            setFilteredData(data.filter(item => {
                return (item.beds == parseInt(bed))
            }))
        }
    }
    const filterFuncRoom = () => {
        if (["1", "2", "3", "4", "5"].includes(room)) {
            setFilteredData(data.filter(item => {
                return (item.rooms == parseInt(room))
            }))
        }
    }
    const filterFuncPlace = () => {

        if (["Mumbai", "Delhi", "Bangalore"].includes(place)) {
            setFilteredData(data.filter(item => {
                return item.place === place
            }))
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFilteredData(data)
        filterFuncPlace();
        filterFuncBed();
        filterFuncRoom();
    }

    useEffect(() => {
    }, [filteredData])

    return (
        <div className='min-h-screen bg-blue-50/30 flex items-center overflow-hidden flex-col flex-wrap'>
            <h1 className='text-xl font-bold m-1 p-2'>Search Properties to Rent <span className='font-light opacity-60 text-sm px-2 italic'>The Easy Way!</span></h1>
            <form className='m-2 p-1 text-sm w-5/6 flex flex-wrap border items-center justify-center'>
                <label className='mx-2'>Location</label>

                <select required type="text" value={place} onChange={(e) => setPlace(e.target.value)} className='focus:outline-none my-2 mx-4 px-6 py-1 rounded border'>

                    <option>All</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                </select>

                <label className='mx-2'>Sort By</label>
                <select required type="text" value={price} onChange={(e) => setPrice(e.target.value)} className='focus:outline-none my-2 mx-4 px-6 py-1 rounded border'>

                    <option></option>
                    <option value="Low-to-High">Low to High</option>
                    <option value="High-to-Low">High to Low</option>
                </select>

                <label className='mx-2'>Beds</label>
                <input value={bed} onChange={(e) => setBed(e.target.value)} className="focus:outline-none my-2 mx-4 px-6 py-1 rounded border" type="number" min="1" max="4" />

                <label className='mx-2'>Rooms</label>
                <input value={room} onChange={(e) => setRoom(e.target.value)} className="focus:outline-none my-2 mx-4 px-6 py-1 rounded border" type="number" min="1" max="5" />


                <button onClick={handleSubmit} className='focus:ring px-4 py-1 mx-2 rounded bg-blue-700 hover:bg-blue-500 text-white border'>Search</button>
            </form>

            <div className='flex flex-wrap items-center justify-evenly'>
                {filteredData &&
                    <div className='flex w-screen px-12 py-2'><h1 className='font'>{filteredData.length} Results Found!</h1></div>
                }

                {filteredData
                    &&
                    filteredData.map(item => (
                        <div key={item.id} className="group w-3/12 m-2 inline-block pb-4 bg-gradient-to-tr from-purple-600 to-orange-400 text-white overflow-hidden rounded-xl shadow drop-shadow-lg hover:shadow-md transition">
                            <figure className="aspect-square overflow-hidden">
                                <img
                                    className="h-full w-full object-cover transition group-hover:scale-125"
                                    src={item.image}
                                />
                            </figure>
                            <div className="p-4">
                                <p className="text-3xl font-bold border-b-slate-900 text-purple-200">{item.monthlyPrice}<span className='text-sm opacity-70'>/month</span></p>
                                <h3 className="text-xl opacity-90 ">{item.name} - {item.place}</h3>
                                <p className="text-sm opacity-80">{item.address}</p>
                                <p className="py-1 text-xs opacity-80"><span>{item.beds} Beds</span> and <span>{item.rooms} Rooms</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home