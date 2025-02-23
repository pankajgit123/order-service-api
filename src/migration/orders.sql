
create table users (
	user_id int not null primary key,
	first_name varchar(50) not null,
	last_name varchar(50) not null,
	email varchar(50) unique not null,
	phone_number varchar(20) unique not null,
	salt varchar(50) not null,
	hash varchar(200) not null,
	active boolean default true,
	id_admin boolean default false,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP DEFAULT NOW()
)
go

create table orders
(
	order_number varchar(50) primary key,
	created_date date,
	user_id int,
	shipping_address_id int,
	order_status varchar(20) default 'pending',
	payment_status varchar(20) default 'un-paid',
	total_price decimal(10,2) not null,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP DEFAULT NOW()
)

create table categories (
	category_id int not null primary key,
	category_type varchar,
	created_at date
)

create table products (
	product_id int not null primary key,
	product_name varchar(100),
	price decimal(10,2) not null,
	stock_quantity INT DEFAULT 0,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP DEFAULT NOW(),
	category_id int,
	CONSTRAINT fk_category FOREIGN KEY (category_id)
    REFERENCES categories(category_id)
)

create table order_items
(
	order_item_id serial primary key,
	order_number varchar(50) REFERENCES orders(order_number) ON DELETE CASCADE,
	product_id int references products(product_id),
	quantity int not null,
	price decimal(10,2) not null
)
