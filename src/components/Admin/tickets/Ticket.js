import React from "react";
import { Link } from "react-router-dom";

export default function Ticket() {
  return (
    <div className="container-fluid">
      {/* Card stats */}
      <div className="row g-6 mb-6">
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                    New Tickets
                  </span>
                  <span className="h3 font-bold mb-0">0</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                    <i className="bi bi-ticket" />
                  </div>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-soft-success text-success me-2">
                  <i className="bi bi-arrow-up me-1" />
                  13%
                </span>
                <span className="text-nowrap text-xs text-muted">
                  Since last month
                </span>
                <Link className="btn btn-info float-end btn-sm" to="/admin/ticket/new"> New</Link>
           
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                    Open Tickets
                  </span>
                  <span className="h3 font-bold mb-0">0</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                    <i className="bi bi-ticket" />
                  </div>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-soft-success text-success me-2">
                  <i className="bi bi-arrow-up me-1" />
                  13%
                </span>
                <span className="text-nowrap text-xs text-muted">
                  Since last month
                </span>
                <button className="btn btn-info float-end btn-sm">
                  Open Tickets
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                    Closed Tickets
                  </span>
                  <span className="h3 font-bold mb-0">0</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                    <i className="bi bi-flap" />
                  </div>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-soft-success text-success me-2">
                  <i className="bi bi-arrow-up me-1" />
                  13%
                </span>
                <span className="text-nowrap text-xs text-muted">
                  Since last month
                </span>
                <button className="btn btn-info float-end btn-sm">
                  Close Ticket
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                    Hold Tickets
                  </span>
                  <span className="h3 font-bold mb-0">0</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                    <i className="bi bi-ticket" />
                  </div>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-soft-success text-success me-2">
                  <i className="bi bi-arrow-up me-1" />
                  13%
                </span>
                <span className="text-nowrap text-xs text-muted">
                  Since last month
                </span>
                <button className="btn btn-info float-end btn-sm">
                  Hold Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow border-0 mb-7">
        <div className="card-header">
          <h5 className="mb-0">Applications</h5>
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
