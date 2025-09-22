import React from 'react'

const BrowseByLifestyle = () => {
    const items = [
        { icon: "bi bi-tv", title: "LIFESTYLE" },
        { icon: "bi bi-house", title: "LIFESTYLE" },
        { icon: "bi bi-grid", title: "LIFESTYLE" },
        { icon: "bi bi-bell", title: "LIFESTYLE" },
        { icon: "bi bi-sun", title: "LIFESTYLE" },
        { icon: "bi bi-droplet", title: "LIFESTYLE" },
        { icon: "bi bi-heart", title: "LIFESTYLE" },
        { icon: "bi bi-pencil", title: "LIFESTYLE" },
        { icon: "bi bi-bag", title: "LIFESTYLE" },
        { icon: "bi bi-cup-straw", title: "LIFESTYLE" },
    ];
    return (
        <>
            <div className='py-5' style={{
                backgroundColor: "#1b1b1b",
                color: "white",
                height: '50vh'
            }}>
                <div className="container">
                    <div className="row">
                        <div className='col-md-6'>
                            <h2
                                className="fw-bold text-right"
                                style={{
                                    fontFamily: " serif",
                                    fontSize: "2.5rem",
                                    lineHeight: 1.3,
                                    textTransform: "uppercase",
                                    justifyContent: 'right'
                                }}
                            >
                                <span
                                    style={{
                                        color: "#d4b37f",
                                        fontWeight: 400,
                                        marginBottom: "0.3rem",
                                    }}
                                >
                                    BROWSE BY
                                </span> <br />
                                <span style={{ color: "white", fontWeight: 400 }}>
                                    LIFSTYLE
                                </span>
                            </h2>
                        </div>
                        <div className='col-md-6'>
                            <p className='text-right'
                                style={{
                                    color: '#d4b37f',
                                    fontWeight: 200
                                }}>
                                LOREM IPSUM DOLOR SIT AMET, <br /> CONSECTUTER ADIPISCING ELIT.
                            </p>
                        </div>
                    </div>

<div className='mt-5'
  style={{
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  }}
>
  {items.map((item, index) => (
    <div
      key={index}
      style={{
        width: "20%",           // 5 per row
        height: "250px",        // make them taller than wide
        border: "1px solid rgba(255,255,255,0.1)",
        backgroundColor: "#1f1f1f",
        textAlign: "center",
        padding: "1.5rem 1rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "1px solid #d4b37f",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1rem",
        }}
      >
        <i
          className={item.icon}
          style={{ color: "#d4b37f", fontSize: "1.5rem" }}
        ></i>
      </div>
     <h6 className="fw-bold mt-5" style={{ textAlign: "left" }}>
  {item.title}
</h6>
<p
  className="small"
  style={{
    color: "#aaa",
    fontSize: "0.8rem",
    marginTop: "2px",
    textAlign: "left",
  }}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>

    </div>
  ))}
</div>


                </div>
            </div>

        </>
    )
}

export default BrowseByLifestyle
