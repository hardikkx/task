import React, { Component } from 'react'
import './Java.css'

export default class Java extends Component {

    componentDidMount() {
        const apiUrl = 'https://api.jsonbin.io/b/5efdf1000bab551d2b6ab1c9/1';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => console.log('This is your data', data));
      }
    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <div className="form_1">
                        <div className="card mb-3" style={{ backgroundColor: "#F7F7F9" }}>
                        <h3 className="h3"> Add Product</h3>
                            <div className="card-body">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputid1">Id</label>
                                        <input type="id" class="form-control" id="exampleInputid1" aria-describedby="idHelp" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputname1">Name</label>
                                        <input type="name" class="form-control" id="exampleInputname1" aria-describedby="nameHelp" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputprice1">Price</label>
                                        <input type="price" class="form-control" id="exampleInputprice1" aria-describedby="priceHelp" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="validationDefault04">Product</label>
                                        <select class="custom-select" id="validationDefault04" required>
                                            <option selected disabled value="">Choose...</option>
                                            <option>pencil</option>
                                            <option>pen</option>
                                            <option>Book</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="validationDefault04">Qty</label>
                                        <input type="number" id="quantity" className="form-control" name="quantity" min="1" />
                                    </div>

                                    <form>
                                        <div class="form-group">

                                            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                        </div>
                                    </form>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}