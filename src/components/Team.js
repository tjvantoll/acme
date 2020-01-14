import React from "react";
import { Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, CardSubtitle } from "@progress/kendo-react-layout";

export default function Team() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div style={{ width: '45%' }}>
        <div>Horizontal Card</div>
        <hr />
        <Card orientation='horizontal'>
          <CardImage src="https://store-images.s-microsoft.com/image/apps.29972.14474337564596307.6c783b22-9460-4205-938c-2969961ed85c.aa21aff2-b2b2-411b-88bb-158187c6e238?mode=scale&q=90&h=1080&w=1920" />
          <div className="k-vbox">
            <CardHeader>
              <CardTitle>Coffee with friends</CardTitle>
              <CardSubtitle>
                <span className="reviews">
                  <span className="k-icon k-i-star" style={{ color: '#ffce2a' }}></span>
                  <span className="k-icon k-i-star" style={{ color: '#ffce2a' }}></span>
                  <span className="k-icon k-i-star" style={{ color: '#ffce2a' }}></span>
                  <span className="k-icon k-i-star" style={{ color: '#ffce2a' }}></span>
                  <span className="k-icon k-i-star-outline"></span>
                  <div>4/5 (681)</div>
                </span>
              </CardSubtitle>
            </CardHeader>
            <CardBody>
              <p>The right place to be if you're in love with high quality espresso or tea.
              We offer wide range to top coffee brands as Davidoff Cafe, Lavazza, Tchibo, Illy.
                    </p>
            </CardBody>
            <CardActions>
              <button className="k-button k-primary k-flat">Review</button>
            </CardActions>
          </div>
        </Card>
      </div>
      <div style={{ width: '45%' }}>
        <div>Vertical Card</div>
        <hr />
        <Card>
          <CardImage src="https://store-images.s-microsoft.com/image/apps.29972.14474337564596307.6c783b22-9460-4205-938c-2969961ed85c.aa21aff2-b2b2-411b-88bb-158187c6e238?mode=scale&q=90&h=1080&w=1920" />
          <div>
            <CardHeader>
              <h1 CardTitle>Coffee with friends</h1>
              <div CardSubtitle>
                <span className="reviews">
                  <span className="k-icon k-i-star" style={{ color: '#ffce2a' }}></span>
                  <span className="k-icon k-i-star" style={{ color: '#ffce2a' }}></span>
                  <span className="k-icon k-i-star" style={{ color: '#ffce2a' }}></span>
                  <span className="k-icon k-i-star" style={{ color: '#ffce2a' }}></span>
                  <span className="k-icon k-i-star-outline"></span>
                  <div>4/5 (681)</div>
                </span>
              </div>
            </CardHeader>
            <CardBody>
              <p>The right place to be if you're in love with high quality espresso or tea.
              We offer wide range to top coffee brands as Davidoff Cafe, Lavazza, Tchibo, Illy.
                        </p>
            </CardBody>
            <CardActions>
              <button className="k-button k-primary k-flat">Review</button>
            </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
}
