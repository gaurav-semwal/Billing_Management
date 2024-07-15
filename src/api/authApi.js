import AsyncStorage from '@react-native-async-storage/async-storage';

const base_url = "https://billing-expertz.clikzopdevp.com/api/";

export const isValidToken = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (!token) {
      console.log('Token not found');
      return false;
    }
    console.log('Token found:', token);

    return true;
  } catch (error) {
    console.error('Token validation error:', error);
    return false;
  }
};


export const Customers_Api = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append("token", token);


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(`${base_url}get-customers`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Login_Api = async (username, password) => {
  console.log(username, password)
  try {
    const myHeaders = new Headers();
    // myHeaders.append("Cookie", "PHPSESSID=4rhec3uir32urn2farjjklv3in");

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow"
    };

    const response = await fetch(`${base_url}login`, requestOptions);
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Login Result:', result);
    return result;
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};

export const Seting_Api = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    // myHeaders.append("token", token);


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(`${base_url}settings`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Category_Api = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append("token", token);


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(`${base_url}get-category`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const sub_Category_Api = async (id) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append("token", token);
    
    const formdata = new FormData();
    formdata.append("category_id", id);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
      body: formdata,
    };

    const response = await fetch(`${base_url}get-sub-category`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Customer_Api = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append("token", token);


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(`${base_url}get-customers`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Vendor_Api = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append("token", token);


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(`${base_url}get-vendor-labour`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Get_Expense_Category_Api = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append('token', token);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(
      `${base_url}get-expense-category`,
      requestOptions,
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText} - ${errorText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Get_Expense_Sub__Category_Api = async (id) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append('token', token);

    const formdata = new FormData();
    formdata.append("category_id", id);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body: formdata,
    };

    const response = await fetch(
      `${base_url}get-sub-category`,
      requestOptions,
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText} - ${errorText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const GST_Api = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append("token", token);


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(`${base_url}get-gst`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Add_Invoice = async (customerid, prodlist, duedate, tax, invoicedate, gsttype) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append('token', token);

    const formdata = new FormData();
    formdata.append("customer_id", customerid);
    formdata.append("prod_list", JSON.stringify(prodlist));
    formdata.append("due_date", duedate);
    formdata.append("service_tax", tax);
    formdata.append("invoice_date", invoicedate);
    formdata.append("gst_type_mst", gsttype);
    formdata.append("id", '');

    console.log(formdata)

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body: formdata,
    };

    const response = await fetch(
      `${base_url}add-sale`,
      requestOptions,
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText} - ${errorText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Get_Sales_Api = async (id) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append('token', token);

    const formdata = new FormData();
    formdata.append("customer_id", id);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body: formdata,
    };

    const response = await fetch(
      `${base_url}get-sale`,
      requestOptions,
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText} - ${errorText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Dashboard_Api = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append("token", token);


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(`${base_url}dashboard`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Add_Expense = async (
  customerid,
  amount,
  fileUri,
  name,
  category,
  date,
  payment,
  note,
  refno,
  vendor,
) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append('token', token);

    const formdata = new FormData();
    formdata.append('customer_id', customerid);
    formdata.append('amount', amount);
    
    if (fileUri) {
      formdata.append('file', {
        uri: fileUri,
        type: 'image/jpeg',
        name: 'file.jpg',
      });
    }

    formdata.append('name', name);
    formdata.append('expense_category', category);
    formdata.append('expense_date', date);
    formdata.append('payment_mode', payment);
    formdata.append('note', note);
    formdata.append('ref_no', refno);
    formdata.append('vendor_id', vendor);
    formdata.append('expense_type', '');
    formdata.append('invoice_id', '');
    formdata.append('trans_id', '');

    console.log(formdata)
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const response = await fetch(
      'https://billing-expertz.clikzopdevp.com/api/add-expense',
      requestOptions,
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText} - ${errorText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};


export const update_Expense = async (
  customerid,
  amount,
  fileUri,
  name,
  category,
  date,
  payment,
  note,
  refno,
  vendor,
  id
) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append('token', token);

    const formdata = new FormData();
    formdata.append('customer_id', customerid);
    formdata.append('amount', amount);
    if (fileUri) {
      formdata.append('file', {
        uri: fileUri,
        type: 'image/jpeg',
        name: 'file.jpg',
      });
    }
    formdata.append('name', name);
    formdata.append('expense_category', category);
    formdata.append('expense_date', date);
    formdata.append('payment_mode', payment);
    formdata.append('note', note);
    formdata.append('ref_no', refno);
    formdata.append('vendor_id', vendor);
    formdata.append('expense_type', '');
    formdata.append('invoice_id', '');
    formdata.append('trans_id', '');
    formdata.append('id', id);

    console.log(formdata)

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const response = await fetch(
      'https://billing-expertz.clikzopdevp.com/api/add-expense',
      requestOptions,
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText} - ${errorText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Get_Expense_Api = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append("token", token);


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(`${base_url}get-expense`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Get_Sales_Details_Api = async (id) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append('token', token);

    const formdata = new FormData();
    formdata.append("sale_id", id);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body: formdata,
    };

    const response = await fetch(
      `${base_url}get-sale-details`,
      requestOptions,
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText} - ${errorText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Update_Invoice = async (customerid, prodlist, duedate, tax, invoicedate, gsttype,id) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append('token', token);

    const formdata = new FormData();
    formdata.append("customer_id", customerid);
    formdata.append("prod_list", JSON.stringify(prodlist));
    formdata.append("due_date", duedate);
    formdata.append("service_tax", tax);
    formdata.append("invoice_date", invoicedate);
    formdata.append("gst_type_mst", gsttype);
    formdata.append("id", id);

    console.log(formdata)

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body: formdata,
    };

    const response = await fetch(
      `${base_url}add-sale`,
      requestOptions,
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText} - ${errorText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Get_Expense_Detail_Api = async (id) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append("token", token);

    const formdata = new FormData();
    formdata.append("id", id);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
      body: formdata,
    };

    const response = await fetch(`${base_url}get-expense-details`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const Delete_item_Api = async (id) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token not found');
    }

    const myHeaders = new Headers();
    myHeaders.append('token', token);

    const formdata = new FormData();
    formdata.append("id", id);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body: formdata,
    };

    const response = await fetch(
      `${base_url}delete-item`,
      requestOptions,
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText} - ${errorText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};


