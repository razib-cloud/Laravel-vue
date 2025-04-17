<template>
  <div class="deznav">
    <div class="deznav-scroll">
      <ul class="metismenu" id="menu">
        <li>
          <a
            class="has-arrow ai-icon"
            href="javascript:void()"
            aria-expanded="false"
          >
            <i class="flaticon-025-dashboard"></i>
            <span class="nav-text">Dashboard</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="index.html">Dashboard Light</a></li>
            <li><a href="index-2.html">Dashboard Dark</a></li>
          </ul>
        </li>

        <li>
          <a
            class="has-arrow ai-icon"
            href="javascript:void()"
            aria-expanded="false"
          >
            <i class="flaticon-041-graph"></i>
            <span class="nav-text">Menu</span>
          </a>
          <ul aria-expanded="false">
            <li><RouterLink to="menus">Menu Category</RouterLink></li>
            <li><RouterLink to="products">All Products</RouterLink></li>
          </ul>
        </li>

        <li>
          <a
            class="has-arrow ai-icon"
            href="javascript:void()"
            aria-expanded="false"
          >
            <i class="flaticon-072-printer"></i>
            <span class="nav-text">Order</span>
          </a>
          <ul aria-expanded="false">
            <li><RouterLink to="orders/create">All Orders</RouterLink></li>
          </ul>
        </li>

        <li>
          <a
            class="has-arrow ai-icon"
            href="javascript:void()"
            aria-expanded="false"
          >
            <i class="flaticon-043-menu"></i>
            <span class="nav-text">Customer</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="table-bootstrap-basic.html">All Customers</a></li>
            <li><a href="table-datatable-basic.html">Reservations</a></li>
          </ul>
        </li>

        <li>
          <a
            class="has-arrow ai-icon"
            href="javascript:void()"
            aria-expanded="false"
          >
            <i class="flaticon-043-menu"></i>
            <span class="nav-text">Reports</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="table-bootstrap-basic.html">Sales Report</a></li>
            <li><a href="table-datatable-basic.html">Customer Report</a></li>
          </ul>
        </li>

        <li>
          <a
            class="has-arrow ai-icon"
            href="javascript:void()"
            aria-expanded="false"
          >
            <i class="flaticon-022-copy"></i>
            <span class="nav-text">Pages</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="page-login.html">Login</a></li>
            <li><a href="page-register.html">Register</a></li>
            <li>
              <a
                class="has-arrow"
                href="javascript:void()"
                aria-expanded="false"
                >Error</a
              >
              <ul aria-expanded="false">
                <li><a href="page-error-400.html">Error 400</a></li>
                <li><a href="page-error-403.html">Error 403</a></li>
                <li><a href="page-error-404.html">Error 404</a></li>
                <li><a href="page-error-500.html">Error 500</a></li>
                <li><a href="page-error-503.html">Error 503</a></li>
              </ul>
            </li>
            <li><a href="page-lock-screen.html">Lock Screen</a></li>
            <li><a href="empty-page.html">Empty Page</a></li>
          </ul>
        </li>
      </ul>

      <div class="copyright">
        <p>
          <strong>Lezato Restaurant Admin</strong> © 2021 All Rights Reserved
        </p>
        <p class="fs-12">Made with <span class="heart"></span> by DexignZone</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.deznav {
  background-color: #2c3e50;
}
</style>
