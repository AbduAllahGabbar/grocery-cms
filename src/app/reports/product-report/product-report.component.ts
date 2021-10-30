import { Component } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { CrudService } from '../../../service/crud.service';
import { CategoryModel } from '../../categories/categories.component';
import { CategoryService } from '../../categories/category.service';
import { GraphTypeEnum, ReportService } from '../report.service';

export interface ProductGraphFilterModel {
    salesGraphFilterType: string;
    topSellingProductFilterType: string;
    categoryGraphFilterType: string;
    productFilter: string;
    paymentTypeFilter: string;
    userRegistrationGraphFilter: string;
}

export interface GraphTypeModel {
    graphType: string;
    categoryId?: string;
}

export interface GraphApiResponseModel {
    _id: {
        productName: string;
    };
    count: number;
    total: number;
}

@Component({
    selector: 'app-product-report',
    templateUrl: './product-report.component.html',
    styleUrls: ['./product-report.component.scss']
})
export class ProductReportComponent {

    public lineChartData: ChartDataSets[] = [
        { data: [], label: '' },
    ];
    public lineChartLabels: Label[] = [];
    public lineChartOptions: (ChartOptions & { annotation: any }) = {
        responsive: true,
        scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{}],
            yAxes: [
                {
                    id: 'y-axis-0',
                    position: 'left',
                },
                {
                    id: 'y-axis-1',
                    position: 'right',
                    gridLines: {
                        color: 'rgba(255,0,0,0.3)',
                    },
                    ticks: {
                        fontColor: 'red',
                    }
                }
            ]
        },
        annotation: {
            annotations: [
                {
                    type: 'line',
                    mode: 'vertical',
                    scaleID: 'x-axis-0',
                    value: 'March',
                    borderColor: 'orange',
                    borderWidth: 2,
                    label: {
                        enabled: true,
                        fontColor: 'orange',
                        content: 'LineAnno'
                    }
                },
            ],
        },
    };
    public lineChartColors: Color[] = [
        { // red
            backgroundColor: 'rgba(255,0,0,0.3)',
            borderColor: 'red',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend = true;
    public lineChartType: ChartType = 'line';
    public lineChartPlugins = [];
    //
    public hasGraphData: boolean;  // checks whether there is graph data or not
    public graphFilters: ProductGraphFilterModel = {
        salesGraphFilterType: 'DAILY',
        topSellingProductFilterType: 'YEAR-TO-DATE',
        categoryGraphFilterType: 'YEAR-TO-DATE',
        productFilter: 'YEAR-TO-DATE',
        paymentTypeFilter: 'MONTH-TO-DATE',
        userRegistrationGraphFilter: 'DAILY'
    };      // contains all types of graph filters

    public barChartOptions: ChartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: { xAxes: [{}], yAxes: [{}] },
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
            }
        }
    };
    public barChartLabels: Label[] = [];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [];

    public barChartData: ChartDataSets[] = [
        { data: [], label: '' }
    ];

    public productBbarChartData: ChartDataSets[] = [
        { data: [], label: '' }
    ];

    public productBarChartLabels: Label[] = [];


    public categoryGraphColors = [
        {
            backgroundColor: ['#c5e3f6', '#fc5c9c', '#581b98', '#faee1c', '#22d1ee', '#688EC4', '#0e153a', '#a7ff83', '#17b978', '#086972', '#9e579d', '#574b90', '#1f4287', '#ffa45c', '#ea7dc7', '#49beb7', '#3e3636', '#E45145']
        }
    ];      // contains colours for each categories
    public productList: Array<GraphApiResponseModel> = [];     // contains top 10 products
    public selectedCategory: string = null;          // contains id of selected cateogry
    public categoryList: Array<CategoryModel> = [];          // contains category list
    //pie
    public pieChartOptions: ChartOptions = {
        responsive: true,
    };
    public pieChartLabels: Label[] = [];
    public pieChartData: SingleDataSet = [];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];
    public paymentTypesGraphColours = [
        {
            backgroundColor: ['#E45145', '#688EC4', '#F27C39', '#6B9494'],
        },
    ];      // contains available colors of payment modes graph

    public paymentTypeGraphLabels: Label[] = [];     // contains order mode labels
    public paymentTypeGraphData: SingleDataSet = [];     // contains order mode revenue
    public userRegistrationChartData: ChartDataSets[] = [
        { data: [], label: '' },
    ];
    public userRegistrationChartLabels: Label[] = [];
    constructor(private reportService: ReportService, private categoryService: CategoryService, private crudService: CrudService) {
        this.getSalesGraph();
        this.getUserRegistrationGraph();
        this.getPaymentTypeGraph();
        this.getCategoryList();
        this.getCategorySalesGraph();
        this.getTopSellingProducts();
    }

    ngOnInit(): void {
        this.crudService.language$.subscribe(language => {
            if (language) {
                this.lineChartData[0].label = language['SALES_IN'] + ' USD';
                this.barChartData[0].label = language['CATEGORY_SALES_IN'] + ' USD';
                this.productBbarChartData[0].label = language['PRODUCT_SALES_IN'] + ' USD';
                this.userRegistrationChartData[0].label = language['USERS_REG'];
            }
        })
    }

    // get's payment type graph
    public getPaymentTypeGraph(): void {
        const filterObj = {
            graphType: this.graphFilters.paymentTypeFilter
        }
        this.reportService.getSalesGraph(GraphTypeEnum.PAYMENT_TYPE, filterObj).subscribe((res: any) => {
            this.paymentTypeGraphData = [];
            this.paymentTypeGraphLabels = [];
            if (res.response_code === 200) {
                res.response_data.forEach(data => {
                    this.paymentTypeGraphLabels.push(data._id.paymentType);
                    this.paymentTypeGraphData.push(data.total);
                })
            }
        });
    }

    // gets category list
    private getCategoryList(): void {
        this.categoryService.getAllEnabled().subscribe((res: any) => {
            this.categoryList = res.response_code === 200 ? res.response_data : [];
            if (this.categoryList.length > 0) {
                this.selectedCategory = this.categoryList[0]._id;
                this.getProductSalesGraph();
            }
        });
    }

    // gets sales mode graph
    public getSalesGraph(): void {
        const filterObj: GraphTypeModel = {
            graphType: this.graphFilters.salesGraphFilterType
        };
        this.reportService.getSalesGraph(GraphTypeEnum.SALES, filterObj).subscribe((res: any) => {
            this.lineChartLabels = res.response_code === 200 ? res.response_data.label : [];
            this.lineChartData[0].data = res.response_code === 200 ? res.response_data.total : [];
        });
    }

    // gets user registration graph
    public getUserRegistrationGraph(): void {
        const filterObj: GraphTypeModel = {
            graphType: this.graphFilters.userRegistrationGraphFilter
        };
        this.reportService.getSalesGraph(GraphTypeEnum.USER_REGISTRATION, filterObj).subscribe((res: any) => {
            this.userRegistrationChartLabels = res.response_code === 200 ? res.response_data.label : [];
            this.userRegistrationChartData[0].data = res.response_code === 200 ? res.response_data.total : [];
        });
    }

    // gets category sales graph
    public getCategorySalesGraph(): void {
        const filterObj: GraphTypeModel = {
            graphType: this.graphFilters.categoryGraphFilterType
        };
        this.reportService.getSalesGraph(GraphTypeEnum.CATEGORY, filterObj).subscribe((res: any) => {
            if (res.response_code === 200) {
                this.barChartData[0].data = [];
                this.barChartLabels = [];
                res.response_data.forEach(data => {
                    if (typeof data._id === 'string') {
                        const label: string = `${data._id} (${data.count} orders)`;
                        this.barChartLabels.push(label);
                        this.barChartData[0].data.push(data.total)
                    };
                });
            } else {
                this.barChartData[0].data = [];
                this.barChartLabels = [];
            }
        });
    }

    // gets product sales by category graph
    public getProductSalesGraph(): void {
        const filterObj: GraphTypeModel = {
            categoryId: this.selectedCategory,
            graphType: this.graphFilters.productFilter
        };
        this.reportService.getSalesGraph(GraphTypeEnum.PRODUCT, filterObj).subscribe((res: any) => {
            this.productBarChartLabels = [];
            this.productBbarChartData[0].data = [];
            if (res.response_code === 200) {
                res.response_data.forEach(data => {
                    const label: string = `${data._id.productName} (${data.count} orders)`;
                    this.productBarChartLabels.push(label);
                    this.productBbarChartData[0].data.push(data.total);
                })
            }
        });
    }

    // gets top 10 products
    public getTopSellingProducts(): void {
        const filterObj: GraphTypeModel = {
            graphType: this.graphFilters.topSellingProductFilterType
        };
        this.reportService.getSalesGraph(GraphTypeEnum.TOP_SELLER, filterObj).subscribe((res: any) => {
            this.productList = res.response_code === 200 ? res.response_data : [];
        });
    }
}