import React, { useEffect } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useNavigate } from 'react-router-dom';
import './Bill.css';

const sanitizeText = (text) => {
  return text.replace(/[^\x00-\x7F]/g, "");
};

export default function Bill() {
  // Bill
  const navigate = useNavigate();

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("latestOrder"));
    if (!order) {
      alert("No order found");
      navigate('/');
      return;
    }

    const DELIVERY_CHARGE = 100;
    const grandTotal = order.total + DELIVERY_CHARGE;

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('EcoMart - Order Invoice', 14, 20);
    doc.setFontSize(12);
    doc.text(`Customer: ${order.name}`, 14, 30);
    doc.text(`Mobile: ${order.mobile}`, 14, 37);
    doc.text(`Address: ${sanitizeText(order.address)}`, 14, 44);
    doc.text(`Date: ${new Date().toLocaleString()}`, 14, 51);

    const tableColumn = ["Product", "Price", "Quantity", "Subtotal"];
    const tableRows = [];

    order.items.forEach(item => {
      tableRows.push([
        item.pname,
        `Rs.${item.pprice}`,
        item.quantity,
        `Rs.${item.subtotal}`
      ]);
    });

    // Add delivery charge and total
    tableRows.push(["", "", "Delivery Charge", `Rs.${DELIVERY_CHARGE}`]);
    tableRows.push(["", "", "Total", `Rs.${grandTotal}`]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 60,
      theme: 'grid',
      styles: { fontSize: 12 },
      headStyles: { fillColor: [11, 159, 81] },
    });

    doc.save("EcoMart-Bill.pdf");
    navigate('/');
  }, [navigate]);

  return <p className="bill-message">Generating your bill...</p>;
}



