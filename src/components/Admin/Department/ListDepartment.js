import React from 'react';
import { Link } from 'react-router-dom';
export default function ListDepartment() {
  return (
    <div className="container-fluid">
      
      <div className="card shadow border-0 mb-7">
        <div className="card-header">
          <h5 className="mb-0">Departments</h5>
          <Link to={'/admin/staff/new'} className='btn btn-info float-end btn-sm'> Add New</Link>
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-nowrap">
            <thead className="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Company</th>
                <th scope="col">Offer</th>
                <th scope="col">Meeting</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                    className="avatar avatar-sm rounded-circle me-2"
                  />
                  <a className="text-heading font-semibold" href="#">
                    Kristin Watson
                  </a>
                </td>
                <td>Feb 15, 2021</td>
                <td>
                  <img
                    alt="..."
                    src="https://preview.webpixels.io/web/img/other/logos/logo-4.png"
                    className="avatar avatar-xs rounded-circle me-2"
                  />
                  <a className="text-heading font-semibold" href="#">
                    Mailchimp
                  </a>
                </td>
                <td>$3.500</td>
                <td>
                  <span className="badge badge-lg badge-dot">
                    <i className="bg-dark" />
                    Not discussed
                  </span>
                </td>
                <td className="text-end">
                  <a href="#" className="btn btn-sm btn-neutral">
                    View
                  </a>
                  <button
                    type="button"
                    className="btn btn-sm btn-square btn-neutral text-danger-hover"
                  >
                    <i className="bi bi-trash" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                    className="avatar avatar-sm rounded-circle me-2"
                  />
                  <a className="text-heading font-semibold" href="#">
                    Cody Fisher
                  </a>
                </td>
                <td>Apr 10, 2021</td>
                <td>
                  <img
                    alt="..."
                    src="https://preview.webpixels.io/web/img/other/logos/logo-5.png"
                    className="avatar avatar-xs rounded-circle me-2"
                  />
                  <a className="text-heading font-semibold" href="#">
                    Webpixels
                  </a>
                </td>
                <td>$1.500</td>
                <td>
                  <span className="badge badge-lg badge-dot">
                    <i className="bg-danger" />
                    Canceled
                  </span>
                </td>
                <td className="text-end">
                  <a href="#" className="btn btn-sm btn-neutral">
                    View
                  </a>
                  <button
                    type="button"
                    className="btn btn-sm btn-square btn-neutral text-danger-hover"
                  >
                    <i className="bi bi-trash" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-footer border-0 py-5">
          <span className="text-muted text-sm">
            Showing 10 items out of 250 results found
          </span>
        </div>
      </div>
    </div>
  );
}
