
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PostData from "../data/post.json";


function Item() {
    return (
        <div>
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
            </div>
        </div>
    )
}

export default Item

