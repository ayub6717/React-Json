import React, { Component } from 'react'
import PostData from "../data/post.json";
import { Col, Container, Row } from 'react-bootstrap'
import Item from './Item';
class ListItem extends Component {


    render() {
        const people = [
            {
                name: 'James',
                age: 31,
            },
            {
                name: 'John',
                age: 75,
            },
            {
                name: 'Paul',
                age: 65,
            },
            {
                name: 'Ringo',
                age: 49,
            },
            {
                name: 'George',
                age: 34,
            }
        ];
        return (
            <div>
{/* 
                {PostData.map((PostDetails, index) => {
                    return <div>
                        {PostData.filter(person => person.id < 3).map(filteredPerson => (
                            <li>
                                {filteredPerson.itemName}
                            </li>
                        ))}
                    </div>
                })} */}


                {PostData.filter(person => person.id < 3).map(filteredPerson => (
                    <li>
                        {filteredPerson.itemName}
                    </li>
                ))}

                



                {/* <div>
                    {people.filter(person => person.age < 60).map(filteredPerson => (
                        <li>
                            {filteredPerson.name}
                        </li>
                    ))}
                </div> */}


                {/* {PostData.map(post => {
                    return <div key={post.id}>
                        <h1> {post.type} </h1>
                    </div>
                })} */}

                <div className="container">

                    <div className="row">
                        {PostData.map((post) => {
                            return <div key={post.id} className="col-sm-3">

                                <h5>{post.itemName}</h5>
                                <p> {post.description} </p>
                                <p>{post.price}</p>

                            </div>
                        })}
                    </div>
                    {/* <div className="col-sm-4">
                        {PostData.map((post) => {
                            return <div key={post.id}>{post.type}</div>
                        })}
                    </div>
                    <div className="col-sm-4">
                        {PostData.map((post) => {
                            return <div key={post.id}>{post.type}</div>
                        })}
                    </div> */}

                </div>
                <Item />
            </div>
        )
    }
}

export default ListItem