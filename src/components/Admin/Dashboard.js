import React from 'react';


export default function Dashboard() {
  return (
     

  <div className="container-fluid">
    {/* Card stats */}
    <div className="row g-6 mb-6">
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span>
                <span className="h3 font-bold mb-0">$750.90</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                  <i className="bi bi-credit-card" />
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-success text-success me-2">
                <i className="bi bi-arrow-up me-1" />13%
              </span>
              <span className="text-nowrap text-xs text-muted">Since last month</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">New projects</span>
                <span className="h3 font-bold mb-0">215</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                  <i className="bi bi-people" />
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-success text-success me-2">
                <i className="bi bi-arrow-up me-1" />30%
              </span>
              <span className="text-nowrap text-xs text-muted">Since last month</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                <span className="h3 font-bold mb-0">1.400</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                  <i className="bi bi-clock-history" />
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-danger text-danger me-2">
                <i className="bi bi-arrow-down me-1" />-5%
              </span>
              <span className="text-nowrap text-xs text-muted">Since last month</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span>
                <span className="h3 font-bold mb-0">95%</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                  <i className="bi bi-minecart-loaded" />
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-success text-success me-2">
                <i className="bi bi-arrow-up me-1" />10%
              </span>
              <span className="text-nowrap text-xs text-muted">Since last month</span>
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
                <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Robert Fox
                </a>
              </td>
              <td>
                Feb 15, 2021
              </td>
              <td>
                <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Dribbble
                </a>
              </td>
              <td>
                $3.500
              </td>
              <td>
                <span className="badge badge-lg badge-dot">
                  <i className="bg-success" />Scheduled
                </span>
              </td>
              <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">View</a>
                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                  <i className="bi bi-trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Darlene Robertson
                </a>
              </td>
              <td>
                Apr 15, 2021
              </td>
              <td>
                <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-2.png" className="avatar avatar-xs rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Netguru
                </a>
              </td>
              <td>
                $2.750
              </td>
              <td>
                <span className="badge badge-lg badge-dot">
                  <i className="bg-warning" />Postponed
                </span>
              </td>
              <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">View</a>
                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                  <i className="bi bi-trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Theresa Webb
                </a>
              </td>
              <td>
                Mar 20, 2021
              </td>
              <td>
                <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-3.png" className="avatar avatar-xs rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Figma
                </a>
              </td>
              <td>
                $4.200
              </td>
              <td>
                <span className="badge badge-lg badge-dot">
                  <i className="bg-success" />Scheduled
                </span>
              </td>
              <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">View</a>
                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                  <i className="bi bi-trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Kristin Watson
                </a>
              </td>
              <td>
                Feb 15, 2021
              </td>
              <td>
                <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-4.png" className="avatar avatar-xs rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Mailchimp
                </a>
              </td>
              <td>
                $3.500
              </td>
              <td>
                <span className="badge badge-lg badge-dot">
                  <i className="bg-dark" />Not discussed
                </span>
              </td>
              <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">View</a>
                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                  <i className="bi bi-trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Cody Fisher
                </a>
              </td>
              <td>
                Apr 10, 2021
              </td>
              <td>
                <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" className="avatar avatar-xs rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Webpixels
                </a>
              </td>
              <td>
                $1.500
              </td>
              <td>
                <span className="badge badge-lg badge-dot">
                  <i className="bg-danger" />Canceled
                </span>
              </td>
              <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">View</a>
                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                  <i className="bi bi-trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Robert Fox
                </a>
              </td>
              <td>
                Feb 15, 2021
              </td>
              <td>
                <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Dribbble
                </a>
              </td>
              <td>
                $3.500
              </td>
              <td>
                <span className="badge badge-lg badge-dot">
                  <i className="bg-success" />Scheduled
                </span>
              </td>
              <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">View</a>
                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                  <i className="bi bi-trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Darlene Robertson
                </a>
              </td>
              <td>
                Apr 15, 2021
              </td>
              <td>
                <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-2.png" className="avatar avatar-xs rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Netguru
                </a>
              </td>
              <td>
                $2.750
              </td>
              <td>
                <span className="badge badge-lg badge-dot">
                  <i className="bg-warning" />Postponed
                </span>
              </td>
              <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">View</a>
                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                  <i className="bi bi-trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Theresa Webb
                </a>
              </td>
              <td>
                Mar 20, 2021
              </td>
              <td>
                <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-3.png" className="avatar avatar-xs rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Figma
                </a>
              </td>
              <td>
                $4.200
              </td>
              <td>
                <span className="badge badge-lg badge-dot">
                  <i className="bg-success" />Scheduled
                </span>
              </td>
              <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">View</a>
                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                  <i className="bi bi-trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Kristin Watson
                </a>
              </td>
              <td>
                Feb 15, 2021
              </td>
              <td>
                <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-4.png" className="avatar avatar-xs rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Mailchimp
                </a>
              </td>
              <td>
                $3.500
              </td>
              <td>
                <span className="badge badge-lg badge-dot">
                  <i className="bg-dark" />Not discussed
                </span>
              </td>
              <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">View</a>
                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                  <i className="bi bi-trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Cody Fisher
                </a>
              </td>
              <td>
                Apr 10, 2021
              </td>
              <td>
                <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" className="avatar avatar-xs rounded-circle me-2" />
                <a className="text-heading font-semibold" href="#">
                  Webpixels
                </a>
              </td>
              <td>
                $1.500
              </td>
              <td>
                <span className="badge badge-lg badge-dot">
                  <i className="bg-danger" />Canceled
                </span>
              </td>
              <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">View</a>
                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                  <i className="bi bi-trash" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-footer border-0 py-5">
        <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
      </div>
    </div>
  </div> 


  );
}
