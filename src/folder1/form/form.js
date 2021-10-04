import React from 'react'
import './form.css'

function Form() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card p-3 rounded-3">
                        <div>
                            <h5>
                                Exchange
                            </h5>
                            <p>Trade tokens in an instant</p>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" min="0" className="form-control" id="floatingInput" placeholder="Input to get amount" />
                            <label for="floatingInput">Input to get amount</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" min="0" className="form-control" readonly id="floatingPassword" placeholder="0.0" value="15" />
                            <label for="floatingPassword">v1</label>
                        </div>
                        <button href="#" className="btn btn-warning my-3 py-3 text-white">Swap</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
