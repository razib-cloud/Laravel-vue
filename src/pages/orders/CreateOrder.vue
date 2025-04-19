<template>
  



  <div class="container my-5">
        <div class="invoice-container">
            <div class="d-flex justify-content-between align-items-center border-bottom pb-3">
                <h2 class="mb-0 theme-color">Invoice <strong>#INV-0001</strong></h2>
                <span class="badge theme-bg fs-6">Pending</span>
            </div>

            <div class="row mt-4">
                <div class="col-md-4">
                    <h6 class="theme-color">From:</h6>
                    <p class="mb-0"><strong>Razib Farhan</strong></p>
                    <p class="text-muted">Address: Shankar, Dhanmondi-1213</p>
                    <p class="text-muted">Email: mdrazib@gmail.com</p>
                    <p class="text-muted">Phone: 01855997560</p>
                </div>

                <div class="col-md-4">
                    <h6 class="theme-color">To:</h6>
                    <select class="form-select mb-2" @change="handleSelectedSupplier">
                <option>Select Customer</option>
                <option v-for="customer in customers" :key="customer.id" :value="JSON.stringify(customer)">
                  {{ customer.name }}
                </option>
              </select>
                    <p class="text-muted">Address: Agarga, Taltola</p>
                    <p class="text-muted">Email: mark@daniel.com</p>
                    <p class="text-muted">Phone: 01535824509</p>
                </div>

                <div class="col-md-4 text-end">
                    <p><strong>Invoice Number:</strong> #123456</p> 
                    <!-- <img src="{{ asset('assets') }}/images/qr.png" alt="QR Code" class="img-fluid" width="100"> -->
                </div>

            </div>

            <div class="table-responsive mt-4">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Description</th>
                            <th class="text-end">Unit Cost</th>
                            <th class="text-center">Qty</th>
                            <th class="text-end">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><strong>Origin License</strong></td>
                            <td>Extended License</td>
                            <td class="text-end">$999.00</td>
                            <td class="text-center">1</td>
                            <td class="text-end">$999.00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Custom Services</td>
                            <td>Installation & Customization</td>
                            <td class="text-end">$150.00</td>
                            <td class="text-center">20</td>
                            <td class="text-end">$3,000.00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Hosting</td>
                            <td>1-year subscription</td>
                            <td class="text-end">$499.00</td>
                            <td class="text-center">1</td>
                            <td class="text-end">$499.00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Platinum Support</td>
                            <td>1-year subscription</td>
                            <td class="text-end">$3,999.00</td>
                            <td class="text-center">1</td>
                            <td class="text-end">$3,999.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="row mt-4">
                <div class="col-md-6"></div>
                <div class="col-md-6">
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td><strong>Subtotal</strong></td>
                                <td class="text-end">$8,497.00</td>
                            </tr>
                            <tr>
                                <td><strong>Discount (20%)</strong></td>
                                <td class="text-end text-danger">-$1,699.40</td>
                            </tr>
                            <tr>
                                <td><strong>VAT (10%)</strong></td>
                                <td class="text-end">$679.76</td>
                            </tr>
                            <tr class="theme-bg">
                                <td><strong>Total</strong></td>
                                <td class="text-end"><strong>$7,477.36</strong><br>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="d-flex justify-content-end">
                <button class="btn btn-theme px-4">Download PDF</button>
                <button class="btn btn-dark ms-2 px-4">Pay Now</button>
            </div>
        </div>
    </div>
  
</template>

<script  setup>
import { ref } from 'vue';
import { useCart } from './Cart';


const cart = useCart('sales')
const baseUrl = 'http://localhost/Laravel/Restaurant/public/'



//state

const customers = ref([])
const selectedCustomers = ref(null)





 

</script>

<style>


</style>