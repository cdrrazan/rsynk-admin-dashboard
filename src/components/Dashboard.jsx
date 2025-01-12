import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <Container fluid className="py-4">
      <Row className="g-4">
        <Col md={3}>
          <Card className="stat-card">
            <Card.Body>
              <h6 className="card-subtitle mb-2">Total Revenue</h6>
              <h3 className="card-title mb-0">$48,256</h3>
              <small className="text-success">+3.5% from last week</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="stat-card">
            <Card.Body>
              <h6 className="card-subtitle mb-2">Total Orders</h6>
              <h3 className="card-title mb-0">856</h3>
              <small className="text-danger">-2.4% from last week</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="stat-card">
            <Card.Body>
              <h6 className="card-subtitle mb-2">Total Users</h6>
              <h3 className="card-title mb-0">2,856</h3>
              <small className="text-success">+4.6% from last week</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="stat-card">
            <Card.Body>
              <h6 className="card-subtitle mb-2">Total Visits</h6>
              <h3 className="card-title mb-0">15,678</h3>
              <small className="text-success">+12.5% from last week</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Sales Overview</Card.Title>
              <Line data={chartData} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Recent Activities</Card.Title>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-time">2 hours ago</span>
                  <p>New order received from John Doe</p>
                </div>
                <div className="activity-item">
                  <span className="activity-time">3 hours ago</span>
                  <p>Server update completed</p>
                </div>
                <div className="activity-item">
                  <span className="activity-time">5 hours ago</span>
                  <p>New user registered</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;