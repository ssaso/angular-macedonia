import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterModule, CommonModule],
  template: `
    <nav>
      <ng-container *ngFor="let breadcrumb of breadcrumbs; let last = last">
        <ng-container *ngIf="!last">
          <a [routerLink]="breadcrumb.url">{{ breadcrumb.label }}</a> &gt;
        </ng-container>
        <span *ngIf="last">{{ breadcrumb.label }}</span>
      </ng-container>
    </nav>
  `,
  styles: [
    `
      nav {
        font-size: 14px;
        margin-bottom: 10px;
      }
      a {
        text-decoration: none;
        color: blue;
      }
      a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class BreadcrumbsComponent {
  breadcrumbs: Array<{ label: string; url: string }> = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.createBreadcrumbs(this.route.root))
      )
      .subscribe((breadcrumbs) => (this.breadcrumbs = breadcrumbs));
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<{ label: string; url: string }> = []
  ): Array<{ label: string; url: string }> {
    if (!breadcrumbs.length) {
      // Add Home to the breadcrumbs if it's the root
      breadcrumbs.push({ label: 'Home', url: '/' });
    }

    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      if (routeURL) {
        url += `/${routeURL}`;
        breadcrumbs.push({
          label: child.snapshot.data['breadcrumb'] || routeURL,
          url,
        });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
