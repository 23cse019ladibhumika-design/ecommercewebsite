-- Insert sample data
INSERT INTO admins (username, password_hash, name) VALUES 
('admin', SHA2('admin123', 256), 'System Administrator');

INSERT INTO categories (name, description) VALUES 
('Electronics', 'Electronic gadgets and devices'),
('Clothing', 'Fashion and apparel'),
('Books', 'Books and literature'),
('Home & Garden', 'Home improvement and gardening');

INSERT INTO products (name, description, price, stock_quantity, category_id, image_url) VALUES 
('Smartphone', 'Latest Android smartphone with 128GB storage', 25000.00, 50, 1, 'images/smartphone.jpg'),
('Laptop', 'High-performance laptop for professionals', 75000.00, 30, 1, 'images/laptop.jpg'),
('T-Shirt', 'Cotton casual t-shirt', 500.00, 100, 2, 'images/tshirt.jpg'),
('Jeans', 'Blue denim jeans', 1500.00, 75, 2, 'images/jeans.jpg'),
('Programming Book', 'Learn Java programming', 800.00, 25, 3, 'images/book.jpg');