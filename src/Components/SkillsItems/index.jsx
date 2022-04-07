import React from 'react'

export default function index({img}) {
    return (
            <div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-brand-item d-table">
								<div className="d-table-cell text-center">
									<img src={img} alt=""/>
								</div>
							</div>
						</div>
    )
}
